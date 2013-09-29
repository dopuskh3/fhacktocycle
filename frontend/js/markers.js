this.module('appMarkers', function() {
  
  this.defaultMarker = L.AwesomeMarkers.icon({
    icon: 'book', 
    color: 'blue'
  });
  
  this.myMarker = L.AwesomeMarkers.icon({
    icon: 'user', 
    color: 'green'
  });
  
  this.shelterMarker = L.AwesomeMarkers.icon({
    icon: 'shield', 
    color: 'orange'
  });
  
  this.historicMarker = L.AwesomeMarkers.icon({
    icon: 'thumbs-up', 
    color: 'purple'
  });
  
  this.bikeMarker = L.AwesomeMarkers.icon({
    icon: 'heart', 
    color: 'red'
  });
  
});