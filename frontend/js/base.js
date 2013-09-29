this.module('base', function() {

  this.markers = [];
  this.ownMarker;
  this.defaultZoom = 17;
  this.api = 'http://92.39.246.130:7000/';
  this.weather = {};
  // create a map in the "map" div, set the view to a given place and zoom
  this.map = L.map('map', { center: [samples.myLocation.latitude, samples.myLocation.longitude], zoom: base.defaultZoom });

  //base layer of the map
  L.tileLayer('http://92.39.246.130:8000/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(base.map);


  //Auto locate with mobile
  function update() {
    console.log("Locating");
    this.map.locate()
      .on('locationfound', function(location) {
                            helpers.updateLocation(location);
                            helpers.makeRequest(location);
                          })
      .on('locationerror', function(error) { alert(error.message); map.stopLocate(); });
  }
  setInterval(update, 1000);

  //mock update
  //helpers.updateLocation(samples.myLocation);

  //Add samples
  //helpers.addMarkers(samples.data);
  /*
  $.ajax( {
    type: "GET",
    url: base.api+samples.myLocation.latitude+'/'+samples.myLocation.longitude,
    dataType: "jsonp",
    } ).complete(function(data) {console.log(data); helpers.addMarkers($.parseJSON(data));});

    helpers.addMarkers($.parseJSON(base.dataset));
        */
  //helpers.removeMarkers();
});
