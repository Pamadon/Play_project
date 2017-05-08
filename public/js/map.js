 /* globals google */
 var labels = '123456789';
 var labelIndex = 0;

 var map, infoWindow;

 function initMap() {
     map = new google.maps.Map(document.getElementById('map'), {
         center: { lat: 47.607700167129295, lng: -122.33552902936935 },
         zoom: 15
     });

     google.maps.event.addListener(map, 'click', function(event) {
         addMarker(event.latLng, map);
     });

     function addMarker(location, map) {

         var marker = new google.maps.Marker({
             position: location,
             map: map
         });


         var pin_lat = location.lat();
         var pin_long = location.lng();
         var myTextArea1 = document.getElementById('lat');
         var myTextArea = document.getElementById('long');
         myTextArea.setAttribute('value', pin_long);
         myTextArea1.setAttribute('value', pin_lat);


     }



     infoWindow = new google.maps.InfoWindow;

     // Try HTML5 geolocation.
     if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position) {
             var pos = {
                 lat: position.coords.latitude,
                 lng: position.coords.longitude
             };

             infoWindow.setPosition(pos);
             infoWindow.setContent('You are here!');
             infoWindow.open(map);
             map.setCenter(pos);
         }, function() {
             handleLocationError(true, infoWindow, map.getCenter());
         });
     } else {
         // Browser doesn't support Geolocation
         handleLocationError(false, infoWindow, map.getCenter());
     }
 }


 function handleLocationError(browserHasGeolocation, infoWindow, pos) {
     infoWindow.setPosition(pos);
     infoWindow.setContent(browserHasGeolocation ?
         'Error: The Geolocation service failed.' :
         'Error: Your browser doesn\'t support geolocation.');
     infoWindow.open(map);
 }
