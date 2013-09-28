$( function() {

  // create a map in the "map" div, set the view to a given place and zoom
  var map = L.map('map').setView([51.505, -0.09], 13);

  
  
  map.locate({ watch: true, setView: true })
    .on('locationfound', function(location) { alert('a'); })
    .on('locationerror', function(error) { alert(error.message); map.stopLocate(); });

});