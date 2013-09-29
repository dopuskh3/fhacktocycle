this.module('helpers', function() {

  //Update position
  this.updateLocation = function(location) {
    latlng = [location.latitude, location.longitude];
    base.map.setView(latlng , base.defaultZoom);
    base.ownMarker = L.marker(latlng, {icon: appMarkers.myMarker}).addTo(base.map);
    L.circle(latlng, location.accuracy / 2, { color: 'green' }).addTo(base.map);
  }

  // Add a list of markers
  this.addMarkers = function(l) {
    l.forEach( function(e) {
      latlng = [e.lat, e.lng];
      if(e.tag == "tourisme") {
        var newMarker = L.marker(latlng, {icon : appMarkers.defaultMarker});
        newMarker.bindPopup(viewMarker(e));
      }
      if(e.tag == "bikes") {
        var newMarker = L.marker(latlng, {icon : appMarkers.bikeStation});
        newMarker.bindPopup(viewStation(e));
      }
      if(e.tag == "weather") {
        helpers.updateWeather(e);
      }
      base.map.addLayer(newMarker);
      base.markers.push(newMarker);
    });
  };

  this.removeMarkers = function() {
    base.markers.forEach( function(e) {
      base.map.removeLayer(e);
    })
  }

  this.makeRequest = function(position){
    $.getJSON(base.api+position.latitude+'/'+position.longitude,
      function(data){
        helpers.addMarkers(data);
      });
  }


  this.updateWeather = function(weather) {
    if(weather.text != base.weather.text) {
      base.weather = weather;
      base.ownMarker.bindPopup(base.weather.text).openPopup();
    }
  }

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
