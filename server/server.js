import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pg from "pg";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// DATABASE SETUP //

const db = new pg.Pool({
    connectionString: process.env.DB_CONN,
});

// ROOT //

app.get("/", (req, res) => {
    res.json({ message: "📸 Photograph App Backend Running"});
});

// LANDMARK ROUTES //

app.get("/landmarks/:city", async (req, res) => {
    const {city} = req.params;

    const {rows} = await db.query(
        "SELECT id, name, description, image_url FROM landmarks WHERE city = $1"
        [city]
    );

    if (rows.length === 0) {
        return res.status(404).json({ error: `No landmarks found for ${city}` });
    }

    res.json({city, landmarks: rows});
})

// WEATHER routes //

app.get("/weather/:city", async (req, res) => {
    const {city} = req.params;

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},GB&appid=${process.env.OPENWEATHER_KEY}&units=metric`
    )

    const data = await response.json();

    res.json({
        city,
        temperature: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleDateString(),
        sunset: new Date(data.sys.sunset * 1000).toLocaleDateString(),
    });
});

// START SERVER //

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});

