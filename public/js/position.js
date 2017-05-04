/*if (navigator.geolocation) {
    var timeoutVal = 10 * 1000 * 1000;
    navigator.geolocation.getCurrentPosition(
        displayPosition,
        displayError, { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
    );
} else {
    alert("Geolocation is not supported by this browser");
}

function displayPosition(position) {
    alert("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
}*/

/*var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     var labelIndex = 0;

     function initialize() {
       var seattle = { lat: 47.6062 , lng: -122.3321 };
       var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 16,
         center: seattle
       });

       // This event listener calls addMarker() when the map is clicked.
       google.maps.event.addListener(map, 'click', function(event) {
         addMarker(event.latLng, map);
       });

       // Add a marker at the center of the map.

     }

     // Adds a marker to the map.
     function addMarker(location, map) {
       // Add the marker at the clicked location, and add the next-available label
       // from the array of alphabetical characters.
       var marker = new google.maps.Marker({
         position: location,
         label: labels[labelIndex++ % labels.length],
         map: map,
       });
       console.log(marker);
     }

     google.maps.event.addDomListener(window, 'load', initialize);
