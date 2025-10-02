# Group-Project-Week05

📸 Photo Explorer

Photo Explorer is a simple web app for people who love photography and travel.
Type in the name of a city and the app will show you:

* The current weather 🌦️
* A list of landmarks 🏛️
* Photos of those landmarks 📷

This helps photographers plan trips and know what to expect when they get there.

---

✨ Features

* Search for a city by name
* See live weather information (temperature and conditions)
* View popular landmarks with images
* Works on desktop and mobile

---

🔧 What We Used

* Frontend: HTML, CSS, JavaScript
* Backend: Node.js with Express
* Database: PostgreSQL (via Supabase)
* APIs:

  * [OpenWeatherMap](https://openweathermap.org/) for weather data
  * [Unsplash](https://unsplash.com/developers) for photos
* Deployment: Render

---

📖 User Stories

1. As a user, I want to search for a city so I can explore it.
2. As a user, I want to see the current weather in that city.
3. As a user, I want to view popular landmarks.
4. As a user, I want to see photos of the landmarks.
5. As a user, I want clear messages if the city is not found.
6. As a user, I want the app to work on both computer and phone.
7. As a user, I want to save favourites (stretch goal).

---

🚀 How to Run the App

1. Get the code

```bash
git clone <your-repo-url>
cd photo-explorer
```

2. Install the dependencies

For the server:

```bash
cd server
npm install
```

For the client:

```bash
cd client
npm install
```

3. Add environment variables

Make a `.env` file in the server folder and add:

```
DATABASE_URL=your_postgres_url
WEATHER_API_KEY=your_openweathermap_api_key
IMAGE_API_KEY=your_unsplash_api_key
```

4. Start the app

Run the server:

```bash
cd server
npm start
```

Run the client:

```bash
cd client
npm run dev
```

---

📊 Database Example

```sql
-- Cities table
CREATE TABLE cities (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

-- Landmarks table
CREATE TABLE landmarks (
  id SERIAL PRIMARY KEY,
  city_id INT REFERENCES cities(id),
  name VARCHAR(150),
  image_url TEXT
);
```

---

👥 Team

* P1 – HTML & CSS design
* P2 – JavaScript and front-end logic
* P3 – Express server and database
* P4 – Support, testing, and documentation

