// declare DOM constants

const mainDisplaySection = document.getElementById("app");
const search = document.getElementById("search-form");
const form = document.getElementById("form");

// service so only have to change one URL
const service = "http://localhost:8080/landmarks";

// search form manipulation

async function fetchLandmarks() {
  //  fetch () defaults to GET request
  const response = await fetch(service);
  const landmarks = await response.json();
  // createNovels(landmarks);
  return landmarks;
}

function displayWeatherInfo(location) {
  // get weather information for locations an display into DOM - current temp, sunny cloudy description
}

// invoke function to local API requesting currently stored landmarks and put into allLandmarks
const allLandmarks = fetchLandmarks();

search.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(search);
  const userLocation = Object.fromEntries(data);
  console.log(userLocation);
  let matchFound = false;

  // insert into DOM location searched for as title

  displayWeatherInfo(userLocation);

  allLandmarks.forEach((landmark) => {
    if (landmark.city == userLocation) {
      matchFound = true;
      // add description information and image to Dom display area
    }
  });

  if (!matchFound) {
    // add to DOM not found message
  }
});
