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
      console.log(e)
      latlng = [e.lat, e.lng];
      if(e.type == "tourism") {
        var newMarker = L.marker(latlng, {icon : appMarkers.defaultMarker, title: e.title});
        newMarker.bindPopup(viewMarker(e));
      }
      if(e.type == "shelter") {
        var newMarker = L.marker(latlng, {icon : appMarkers.bikeStation, title: e.title});
        newMarker.bindPopup(viewMarker(e));
      }
      if(e.type == "weather") {
        helpers.updateWeather(e);
      }
      if( typeof newMarker != 'undefined' ) {
        console.log(newMarker);
        base.map.addLayer(newMarker);
        base.markers.push(newMarker);
      }
      
    });
  };

  this.removeMarkers = function() {
    base.markers.forEach( function(e) {
      base.map.removeLayer(e);
    })
  }

  this.makeRequest = function(position) {
    $.getJSON(base.api+position.latitude+'/'+position.longitude,
      function(data){
        console.log("Received response from api server : " + data);
        helpers.addMarkers(data);
      });
  }


  this.updateWeather = function(weather) {
    if(typeof base.weather != 'undefined') {
      if(base.weather.title != weather.title) {
        base.ownMarker.bindPopup(base.weather.title).openPopup();
      }
    } else {
      base.ownMarker.bindPopup(weather.title).openPopup();
    }
    base.weather = weather;  
    
  }

  //Design popups of markers
  viewMarker = function(e) {
    var html = ""
    + "<strong>"
    + e.title
    + "</strong><br/>"
    + " " + e.type
    + e.description
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
