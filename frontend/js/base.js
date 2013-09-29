this.module('base', function() {
  $('body').append("<audio id='sound'><source src='http://www.freesound.org/data/previews/138/138419_2217665-lq.mp3'></source>Update your browser to enjoy HTML5 audio!</audio>");
  this.markers = [];
  this.defaultZoom = 18;
  this.api = 'http://92.39.246.130/api/';
  this.path = [
    { latitude: 45.761827, longitude: 4.828361 },
    { latitude: 45.760443, longitude: 4.826586 }
  ]
  

  // create a map in the "map" div, set the view to a given place and zoom
  this.map = L.map('map', { center: [samples.myLocation.latitude, samples.myLocation.longitude], zoom: base.defaultZoom });

  //base layer of the map
  L.tileLayer('http://92.39.246.130:8000/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(base.map);


  //Auto locate with mobile
  this.update = function() {
    this.map.locate()
      .on('locationfound', function(location) {
                            helpers.updateLocation(location);
                            helpers.makeRequest(location);
                          })
      .on('locationerror', function(error) { alert(error.message); map.stopLocate(); });
  }
  //this.update();
  //setInterval(update, 10000);
  //helpers.updateLocation(samples.myLocation);
  //helpers.makeRequest(samples.myLocation);
  /*setInterval(function() {  //samples.myLocation.latitude -= 0.0005;
                            //samples.myLocation.longitude += 0.0004;
                            helpers.removeMarkers();
                            helpers.updateLocation(samples.myLocation);
                            helpers.makeRequest(samples.myLocation);
                             }, 5000);*/
  //mock update

  path.foreach(function(p) {
    helpers.removeMarkers();
    helpers.updateLocation(p);
    helpers.makeRequest(p);
  });
  //Add samples
  //helpers.addMarkers(samples.data);

  /*$.ajax( {
    type: "GET",
    url: base.api+samples.myLocation.latitude+'/'+samples.myLocation.longitude,
    dataType: "jsonp",
    } ).complete(function(data) {console.log(data); helpers.addMarkers(data);});*/

//    helpers.addMarkers($.parseJSON(base.dataset));

  //helpers.removeMarkers();
  
});
