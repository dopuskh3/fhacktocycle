this.module('markers', function() {
  
  this.defaultMarker = L.AwesomeMarkers.icon({
    icon: 'book', 
    color: 'blue'
  });
  
  this.myMarker = L.AwesomeMarkers.icon({
    icon: 'user', 
    color: 'green'
  });
  
});