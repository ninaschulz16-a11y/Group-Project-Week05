// declare DOM constants

const mainDisplaySection = document.getElementById("app");
const search = document.getElementById("search-form");
const form = document.getElementById("form");

// service so only have to change one URL
const service = "http://localhost:8080/";

// search form manipulation

async function fetchLandmarksCity(city) {
  //  fetch city to GET request
  const response = await fetch(`${service}landmarks/:${city}`);
  const landmarks = await response.json();
  if (!landmarks) {
    // on error display "no landmarks found for city"
  } else {
    displayCityLandmarks(landmarks);
  }
}

async function fetchWeatherCity(city) {
  // fetch weather details for city
  const response = await fetch(`${service}weather/:${city}`);
  const weather = await response.json();
  displayWeatherInfo(weather);
}

function displayCityLandmarks(cityLandmarks) {
  // display into DOM each Landmark name, description image url
  /*
landmark data 

cityLandmarks.city
cityLandmarks.landmarks: rows
cityLandmarks.landmarks.name
cityLandmarks.landmarks.description
cityLandmarks.landmarks.image_url
*/
}

function displayWeatherInfo(location) {
  // display into DOM - temperature, description, icon, sunrise time, sunset time.
  /*
weather data:
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

  // insert into DOM location searched for as title
  fetchLandmarksCity(userCity);
  fetchWeatherCity(userCity);
});

// Push to database code
