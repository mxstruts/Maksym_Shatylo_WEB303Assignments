/*
    Assignment #4
    {Your name here}
*/

$(function () {
  // your code here

  // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
  // function to calculate the distance in metres between two lat/long pairs on Earth
  // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
  // Aren't those cool variable names? Yah gotta love JavaScript
  function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
    var toRadians = function (num) {
      return (num * Math.PI) / 180;
    };
    var R = 6371000; // radius of Earth in metres
    var φ1 = toRadians(lat1);
    var φ2 = toRadians(lat2);
    var Δφ = toRadians(lat2 - lat1);
    var Δλ = toRadians(lon2 - lon1);

    var a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      var accuracy = position.coords.accuracy;

      var locationDiv = document.getElementById('locationhere');
      locationDiv.textContent =
        'Latitude: ' +
        latitude +
        ', Longitude: ' +
        longitude +
        ' (Accuracy: ' +
        accuracy +
        ' meters)';

      var storedLocation = localStorage.getItem('userLocation');

      if (storedLocation) {
        var storedLocationDiv = document.createElement('div');
        storedLocationDiv.textContent = 'Stored Location: ' + storedLocation;

        var welcomeBackHeader = document.createElement('h2');
        welcomeBackHeader.textContent = 'Welcome back to the page, returning visitor!';

        var distance = calculateDistance(storedLocation, latitude, longitude);

        var distanceDiv = document.createElement('div');
        distanceDiv.textContent = 'You traveled ' + distance + ' meters since your last visit.';

        document.body.appendChild(storedLocationDiv);
        document.body.appendChild(welcomeBackHeader);
        document.body.appendChild(distanceDiv);
      } else {
        var welcomeHeader = document.createElement('h2');
        welcomeHeader.textContent = 'Welcome to the page for the first time!';

        document.body.appendChild(welcomeHeader);
      }

      localStorage.setItem('userLocation', latitude + ', ' + longitude);
    });
  } else {
    var errorDiv = document.createElement('div');
    errorDiv.textContent = 'You must allow geolocation to use this application.';
    document.body.appendChild(errorDiv);
  }
});

function calculateDistance(oldLocation, newLatitude, newLongitude) {
  function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
    var toRadians = function (num) {
      return (num * Math.PI) / 180;
    };
    var R = 6371000; // radius of Earth in metres
    var φ1 = toRadians(lat1);
    var φ2 = toRadians(lat2);
    var Δφ = toRadians(lat2 - lat1);
    var Δλ = toRadians(lon2 - lon1);

    var a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }
}
