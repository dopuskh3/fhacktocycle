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
      latlng = [e.latitude, e.longitude];
      if(e.tag == "tourism") {
        var newMarker = L.marker(latlng, {icon : markers.defaultMarker}).addTo(map).bindPopup(viewMarker(e));
      }
      if(e.tag == "bikes") {
        var newMarker = L.marker(latlng, {icon : markers.bikeStation}).addTo(map).bindPopup(viewStation(e));
      }
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
  
  viewStation = function(e) {
    var html = ""
    + "<strong>"
    + e.name
    + "</strong><br/>"
    + e.bikes + " disponibles, " + e.slots + " places libres"
    + "<br/><em>"
    + e.distance
    + " mètres</em>";
    
    return html;
  }
  
});