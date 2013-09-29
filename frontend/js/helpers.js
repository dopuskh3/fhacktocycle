this.module('helpers', function() {

  //Update position
  this.updateLocation = function(location) {
    latlng = [location.latitude, location.longitude];
    base.map.setView(latlng , base.defaultZoom);
    if(typeof base.ownMarker != 'undefined') {
      base.map.removeLayer(base.ownMarker);
    }
    if(typeof base.ownCircle != 'undefined') {
      base.map.removeLayer(base.ownCircle);
    }
    base.ownMarker = L.marker(latlng, {icon: appMarkers.myMarker});
    base.ownCircle = L.circle(latlng, location.accuracy / 2, { color: 'green' });
    base.map.addLayer(ownMarker);
    base.map.addLayer(ownCircle);
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
        var newMarker = L.marker(latlng, {icon : appMarkers.shelterMarker, title: e.title});
        newMarker.bindPopup(viewMarker(e));
      }
      if(e.type == "historic") {
        var newMarker = L.marker(latlng, {icon : appMarkers.historicMarker, title: e.title});
        newMarker.bindPopup(viewMarker(e));
      }
      if(e.type == "velov") {
        var newMarker = L.marker(latlng, {icon : appMarkers.bikeMarker, title: e.title});
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
        setTimeout(function () {base.ownMarker.closePopup();},10000);
      }
    } else {
      base.ownMarker.bindPopup(weather.title).openPopup();
      setTimeout(function () {base.ownMarker.closePopup();},10000);
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
    + e.distance.toFixed(0)
    + " m�tres</em>";

    return html;
  }

  viewStation = function(e) {
    var html = ""
    + "<strong>"
    + e.name
    + "</strong><br/>"
    + e.bikes + " disponibles, " + e.slots + " places libres"
    + "<br/><em>"
    + e.distance.toFixed(0)
    + " m�tres</em>";

    return html;
  }

});
