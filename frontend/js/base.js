this.module('base', function() {
  
  this.markers = [];
  this.ownMarker;
  this.defaultZoom = 17;
  this.api = 'http://192.168.66.35:8000/';
  this.weather = {};

  // create a map in the "map" div, set the view to a given place and zoom
  this.map = L.map('map', { center: [samples.myLocation.latitude, samples.myLocation.longitude], zoom: base.defaultZoom });
  
  //base layer of the map
  L.tileLayer('http://92.39.246.130:8000/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(base.map);
  
  /*
  //Auto locate with mobile
  map.locate()
    .on('locationfound', function(location) { 
                          updateLocation(location);
                          $.post( base.api,
                            { lat: location.latitude, lng: location.longitude }
                          ).done( function(data) {
                                    helpers.addMarkers(data);
                                  });
                        })
    .on('locationerror', function(error) { alert(error.message); map.stopLocate(); });
  */
  
  //mock update
  //helpers.updateLocation(samples.myLocation);
  
  //Add samples
  //helpers.addMarkers(samples.data);
  
  $.post( base.api, { lat: samples.myLocation.latitude, lng: samples.myLocation.longitude } )
    .done( function(data) {
              helpers.addMarkers(data);
            });
            
  //helpers.removeMarkers();
});