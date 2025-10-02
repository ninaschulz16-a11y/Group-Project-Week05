// declare DOM constants

/*  const mainDisplaySection = document.getElementById("app");  not needed */
const weatherDisplaySection = document.getElementById("weather-result");
const landmarksDisplaySection = document.getElementById("landmarks-container");
const search = document.getElementById("search-form");
/*  const form = document.getElementById("form");  not included yet?! */

// service so only have to change one URL
const service = "https://group-project-week05.onrender.com/";

// search form manipulation

async function fetchLandmarksCity(city) {
  //  fetch city to GET request
  const response = await fetch(`${service}landmarks/${city}`);
  const landmarks = await response.json();
  console.log(landmarks);
  if (!landmarks) {
    // on error display "no landmarks found for city"
  } else {
    displayCityLandmarks(landmarks);
  }
}

async function fetchWeatherCity(city) {
  // fetch weather details for city
  const response = await fetch(`${service}weather/${city}`);
  const weather = await response.json();
  console.log(weather);
  displayWeatherInfo(weather);
}

function displayCityLandmarks(cityLandmarks) {
  // display into DOM each Landmark name, description image url

  const cityElement = document.createElement("h2");
  const divLandmarks = [];
  console.log(cityLandmarks);
  cityLandmarks.rows.forEach((landmark, index) => {
    console.log(landmark, index);
    const divLandmark = document.createElement("div");
    divLandmark.setAttribute("class", "landmark");
    // add scc class to eac landmark divs called "landmark"

    /* const divInner = document.createElement("div"); not required so far */

    const landmarkNameElement = document.createElement("h3");
    const landmarkDescriptionElement = document.createElement("p");
    const landmarkImageElement = document.createElement("img");

    // add inner details to tags
    landmarkNameElement.innerText = landmark.name;
    landmarkDescriptionElement.innerText = landmark.description;
    // image tag details require setAttribute() href and an alt description
    landmarkImageElement.setAttribute("src", landmark.image_url);
    landmarkImageElement.setAttribute("alt", `photograph of ${landmark.name}`);

    // stick all elements together
    divLandmark.append(
      landmarkNameElement,
      landmarkDescriptionElement,
      landmarkImageElement
    );

    // append each landmark divs to the array of all of them
    divLandmarks.push(divLandmark);
  });

  // add city name at "top" of all landmarks
  landmarksDisplaySection.append(cityElement);

  // for each landmark div  in the array of divs append to landmarksDisplaySection - which is insertion into the DOM
  divLandmarks.forEach((div) => {
    landmarksDisplaySection.append(div);
  });

  /*
landmark data ---- 1+ of landmark
landmarks {
  cityLandmark.city
  cityLandmark.landmarks: rows
  cityLandmark.landmarks.row.name
  cityLandmark.landmarks.row.description
  cityLandmark.landmarks.row.image_url
}
*/
}

function displayWeatherInfo(location) {
  // display into DOM - temperature, description, icon, sunrise time, sunset time.

  // declare all DOM tags for weather section
  const divWeatherData = document.createElement("div");

  const city = document.createElement("h3");
  const temperature = document.createElement("p");
  const description = document.createElement("p");
  const icon = document.createElement("p");
  const sunrise = document.createElement("p");
  const sunset = document.createElement("p");

  //  set all innerText elements
  city.innerText = `Currently at ${location.city}`;
  temperature.innerText = `The temperature is: ${
  location.temperature - 273.15
  }\\u00B0 Celcius`; // convert from Kelvin to Celcius (Centigrade)
  description.innerText = `The weather is ${location.description}`;
  icon.innerText = `Iconically the weather is: ${location.icon}`;
  sunrise.innerText = `Sunrise is at: ${location.sunrise}`;
  sunset.innerText = `Sunset is at: ${location.sunset}`;

  divWeatherData.append(city, temperature, description, icon, sunrise, sunset);
  weatherDisplaySection.append(divWeatherData);

  /*
weather data structure to use:
location.city
location.temperature
location.description
location.icon
location.sunrise
location.sunset

*/
}

// start of main code
search.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(search);
  const userCity = Object.fromEntries(data);
  console.log(userCity);

  // insert into DOM location searched for as city
  fetchLandmarksCity(userCity);
  fetchWeatherCity(userCity);
});

// Push to database code - later dudes
