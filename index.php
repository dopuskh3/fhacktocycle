<!DOCTYPE html>
<html>
  <head>
    <title>Fhacktocycle</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.6.4/leaflet.css" />
    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" />
    <link rel="stylesheet" href="frontend/css/leaflet.awesome-markers.css">
    <link rel="stylesheet" href="frontend/css/base.css" />
  </head>
  <body>
    <div class="container">
      <h1>Fhacktocycle</h1>
      <div id="map"></div>
    </div>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="http://code.jquery.com/jquery.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
    
    <script src="http://cdn.leafletjs.com/leaflet-0.6.4/leaflet.js"></script>
    
    <script src="frontend/js/leaflet.awesome-markers.min.js"></script>
    
    <script>
      this.module = function(names, fn) {
        var space, _name;
        if (typeof names === 'string') {
          names = names.split('.');
        }
        space = this[_name = names.shift()] || (this[_name] = {});
        space.module || (space.module = this.module);
        if (names.length) {
          return space.module(names, fn);
        } else {
          return fn.call(space);
        }
      };
    </script>
    
    <script src="frontend/js/samples.js"></script>
    <script src="frontend/js/markers.js"></script>
    <script src="frontend/js/helpers.js"></script>
    <script src="frontend/js/base.js"></script>
  </body>
</html>
