this.module('base', function() {
  
  this.markers = [];
  var ownMarker;
  var defaultZoom = 17;

  // create a map in the "map" div, set the view to a given place and zoom
  var map = L.map('map', { center: [samples.myLocation.latitude, samples.myLocation.longitude], zoom: defaultZoom });
  
  //base layer of the map
  L.tileLayer('http://92.39.246.130:8000/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  
  /*
  //Auto locate with mobile
  map.locate({ watch: true, setView: true })
    .on('locationfound', function(location) { updateLocation(location) })
    .on('locationerror', function(error) { alert(error.message); map.stopLocate(); });
  */
  
  //mock update
  helpers.updateLocation(samples.myLocation, map);
  
  //Add samples
  helpers.addMarkers(samples.data, map);
});