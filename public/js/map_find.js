/* globals google, markers */




var initMap = function() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 42.397, lng: -122.644 },
        zoom: 10
    });
    // if brower support available, ask user for location data and set the map view
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var initialLocation = new google.maps.LatLng(
                position.coords.latitude,
                position.coords.longitude
            );
            map.setCenter(initialLocation);
        });
    }
    // for each marker passed through, add it to the map with a popup
    markers.forEach(function(marker) {
        var position = new google.maps.LatLng(marker.lat, marker.long);
        var googleMarker = new google.maps.Marker({
            position: position,
            title: marker.gameName,
            map: map

        });

        // Bind a popup to the marker
        googleMarker.addListener('click', function() {
            var infoWindow = new google.maps.InfoWindow({
                content: '<a href=https://challengemenow.herokuapp.com/activeGame/' + marker._id + '>Join</a>'
            });
            infoWindow.open(map, googleMarker);
            googleMarker.addListener('click', function() {
                infoWindow.close();
            });

        });
    });
};
