// ! Geolocation API
// ? What is it?
// The Geolocation API lets us access the user's physical location (latitude, longitude, accuracy, etc.) via GPS, WiFi, cell towers, or IP.
// => It requires user permission — browsers will ask the user for access before giving out the location.

// * Basic Usage

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("Latitude:", position.coords.latitude);
      console.log("Longitude:", position.coords.longitude);
    },
    (error) => {
      console.error("Error fetching location:", error);
    }
  );
} else {
  console.log("Geolocation is not supported by this browser.");
}

// * How it works:
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

// * The coords object contains:
// latitude
// longitude
// accuracy
// (optionally) altitude, speed, etc.

// * Real Use Cases
// Weather apps that show local forecasts
// Maps or location-based services
// Store finders, nearby places
// Auto-fill user location in forms
