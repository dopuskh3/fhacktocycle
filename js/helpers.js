this.module('helpers', function() {

  //Update position
  this.updateLocation = function(location,map) {
    latlng = [location.latitude, location.longitude];
    map.setView(latlng ,map.getZoom());
    ownMarker = L.marker(latlng, {icon: markers.myMarker}).addTo(map);
    L.circle(latlng, location.accuracy / 2, { color: 'green' }).addTo(map);
  }
  
  // Add a list of markers
  this.addMarkers = function(l, map) {
    l.forEach( function(e) {
      var newMarker = L.marker([e.latitude, e.longitude], {icon : markers.defaultMarker}).addTo(map).bindPopup(viewMarker(e));
      base.markers.push(newMarker);
    });
  };
  
  //Design popups of markers
  viewMarker = function(e) {
    var html = ""
    + "<strong>"
    + e.name
    + "</strong><br/>"
    + e.text
    + "<br/><em>"
    + e.distance
    + " mètres</em>";
    
    return html;
  }
  
});