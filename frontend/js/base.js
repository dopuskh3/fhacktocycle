this.module('base', function() {

  this.markers = [];
  this.ownMarker;
  this.defaultZoom = 17;
  this.api = 'http://192.168.66.35:8000/';
  this.weather = {};
  this.dataset = [{"url": null, "tag": "tourisme", "description": null, "title": "Villa Florentine", "lat": 45.76296089499054, "dst": 0, "lng": 4.825820599328241}, {"url": null, "tag": "tourisme", "description": null, "title": "Fedora Art Gallery", "lat": 45.768498394990246, "dst": 0, "lng": 4.826067199328208}, {"url": null, "tag": "tourisme", "description": null, "title": "Mus\u00e9e Miniature et Cin\u00e9ma", "lat": 45.761875294990546, "dst": 0, "lng": 4.827298499328039}, {"url": null, "tag": "tourisme", "description": null, "title": "La cour des Loges", "lat": 45.76330459499051, "dst": 0, "lng": 4.82736279932803}, {"url": null, "tag": "tourisme", "description": null, "title": "La Tour-Lyon", "lat": 45.76495939499043, "dst": 0, "lng": 4.827448199328015}, {"url": null, "tag": "tourisme", "description": null, "title": "Mus\u00e9e Gadagne", "lat": 45.76395079499047, "dst": 0, "lng": 4.827516399328005}, {"url": null, "tag": "tourisme", "description": null, "title": "La fresque des Lyonnais", "lat": 45.76811219499026, "dst": 0, "lng": 4.8280597993279315}, {"url": null, "tag": "tourisme", "description": null, "title": "Le Phenix", "lat": 45.76661149499036, "dst": 0, "lng": 4.8280875993279215}, {"url": null, "tag": "tourisme", "description": null, "title": "La R\u00e9sidence", "lat": 45.75529739499088, "dst": 0, "lng": 4.830475099327591}, {"url": null, "tag": "tourisme", "description": null, "title": "La biblioth\u00e8que de la cit\u00e9", "lat": 45.76591879499039, "dst": 0, "lng": 4.831067199327513}, {"url": null, "tag": "tourisme", "description": null, "title": "Fondation L\u00e9a et Napol\u00e9on Bullukian", "lat": 45.75660479499084, "dst": 0, "lng": 4.831117099327508}, {"url": null, "tag": "tourisme", "description": null, "title": "Grand Hotel des Terreaux", "lat": 45.76630189499036, "dst": 0, "lng": 4.831742099327419}, {"url": null, "tag": "tourisme", "description": null, "title": "Vue sous-terraine du Parking des C\u00e9lestins", "lat": 45.75977339499069, "dst": 0, "lng": 4.8318707993274}, {"url": null, "tag": "tourisme", "description": null, "title": "Statue \u00e9questre de Louis XIV", "lat": 45.757837094990755, "dst": 0, "lng": 4.832192499327354}, {"url": null, "tag": "tourisme", "description": null, "title": "Clinique v\u00e9t\u00e9rianire", "lat": 45.76601279499033, "dst": 0, "lng": 4.832630199327289}, {"url": null, "tag": "tourisme", "description": null, "title": "Office du Tourisme de Lyon", "lat": 45.75705009499078, "dst": 0, "lng": 4.833000599327236}, {"url": null, "tag": "tourisme", "description": null, "title": "Le Royal", "lat": 45.75632579499082, "dst": 0, "lng": 4.833104599327223}, {"url": null, "tag": "tourisme", "description": null, "title": "Horloge Charvet", "lat": 45.76418289499048, "dst": 0, "lng": 4.8339904993271}, {"url": null, "tag": "tourisme", "description": null, "title": "Sofitel", "lat": 45.75455599499095, "dst": 0, "lng": 4.834101799327088}, {"url": null, "tag": "tourisme", "description": null, "title": "Mercure Lyon Beaux-Arts", "lat": 45.760819694990595, "dst": 0, "lng": 4.834244799327067}, {"url": null, "tag": "tourisme", "description": null, "title": "Amphitrite", "lat": 45.767722694990276, "dst": 0, "lng": 4.83524589932693}, {"url": null, "tag": "tourisme", "description": null, "title": "Polyph\u00e8me", "lat": 45.76759289499029, "dst": 0, "lng": 4.835273399326923}, {"url": null, "tag": "tourisme", "description": null, "title": "Poss\u00e9\u00efdon", "lat": 45.7676894949903, "dst": 0, "lng": 4.8353163993269215}, {"url": null, "tag": "tourisme", "description": null, "title": "Galat\u00e9e", "lat": 45.76763929499031, "dst": 0, "lng": 4.835327199326916}, {"url": null, "tag": "tourisme", "description": null, "title": "H\u00f4tel Bellecordi\u00e8re", "lat": 45.75841719499073, "dst": 0, "lng": 4.835686899326868}, {"url": null, "tag": "tourisme", "description": null, "title": "Flower Tree", "lat": 45.755920494990875, "dst": 0, "lng": 4.8358992993268375}, {"url": null, "tag": "tourisme", "description": null, "title": "La cit\u00e9 de l'eau", "lat": 45.7651987949904, "dst": 0, "lng": 4.836092499326808}, {"url": null, "tag": "tourisme", "description": null, "title": "Carlton", "lat": 45.76102519499061, "dst": 0, "lng": 4.836509699326754}, {"url": null, "tag": "tourisme", "description": null, "title": "Mercure Lyon Plaza R\u00e9publique", "lat": 45.760724094990636, "dst": 0, "lng": 4.8368044993267105}, {"url": null, "tag": "tourisme", "description": null, "title": "sculpture de C\u00e9sar", "lat": 45.76868229499024, "dst": 0, "lng": 4.8375292993266115}, {"url": null, "tag": "tourisme", "description": null, "title": "H\u00f4tel du Helder", "lat": 45.752036494991046, "dst": 0, "lng": 4.840271099326227}, {"url": null, "tag": "tourisme", "description": null, "title": "H\u00f4tel Le Montesquieu", "lat": 45.752944094990994, "dst": 0, "lng": 4.8420434993259835}, {"url": null, "tag": "tourisme", "description": null, "title": "Le mur du cin\u00e9ma", "lat": 45.75488519499091, "dst": 0, "lng": 4.843382499325793}, {"url": null, "tag": "tourisme", "description": null, "title": "Neptune", "lat": 45.755567594990886, "dst": 0, "lng": 4.844128899325694}, {"url": null, "tag": "tourisme", "description": null, "title": "H\u00f4tel des Noailles", "lat": 45.75461879499093, "dst": 0, "lng": 4.844507299325637}, {"url": null, "tag": "tourisme", "description": null, "title": "Apparthotel", "lat": 45.753073994991034, "dst": 0, "lng": 4.8447974993256}, {"url": null, "tag": "tourisme", "description": null, "title": "Mercure Saxe Lafayette", "lat": 45.761783894990536, "dst": 0, "lng": 4.845668899325481}]
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
  helpers.updateLocation(samples.myLocation);
  
  //Add samples
  //helpers.addMarkers(samples.data);
  
  $.getJSON(base.api+samples.myLocation.latitude+'/'+samples.myLocation.longitude,
      function(data){
        console.log(data);
        helpers.addMarkers(data);
      });
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
