const placeDataPromise = fetch(
  `${siteUrl}${siteBaseUrl}/assets/json/places.json`
)
  .then(function (response) {
    return response.json();
  })
  .catch(function (error) {
    console.log("Error:", error);
  });

// Debounce function to throttle or debounce input event to avoid excessive fetch requests
function debounce(func, delay) {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  };
}

// Autocomplete function wrapped with debouncing
const debouncedAutofillPlace = debounce(autofillPlace, 300); // Adjust the delay as needed

function autofillPlace() {
  var input = document.getElementById("place").value;
  var autofillList = document.getElementById("autofill-list");
  autofillList.innerHTML = "";

  placeDataPromise
    .then(function (data) {
      var matches = data
        .filter(function (place) {
          return place.city_country_name
            .toLowerCase()
            .startsWith(input.toLowerCase());
        })
        .slice(0, 6); // Limit to 6 matches

      matches.forEach(function (place) {
        var listItem = document.createElement("li");
        listItem.textContent =
          place.city_country_name + " (" + place.lat + ", " + place.lng + ")";
        listItem.addEventListener("click", function () {
          document.getElementById("place").value = place.city_country_name;
          autofillList.innerHTML = "";
        });
        autofillList.appendChild(listItem);
      });
    })
    .catch(function (error) {
      console.log("Error:", error);
    });
}
