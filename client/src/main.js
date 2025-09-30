// declare DOM constants

const mainDisplaySection = document.getElementById("app");
const search = document.getElementById("search-form");
const form = document.getElementById("form");

// search form manipulation

search.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(search);
  const userLocation = Object.fromEntries(data);
  console.log(userLocation);

  // now get request to API requesting location details
});
