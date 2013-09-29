import json
import urllib
import time
from fhacktocycle.apis import Api, Item
from django.contrib.gis.geos import Point, GEOSGeometry
from django.contrib.gis.measure import D


class VelovApi(Api):

  TYPE = 'velov'

  VELOV_API_URL_PATTERN = "http://ws.data.grandlyon.com/smartdata/jcd_jcdecaux.jcdvelov/all.json?compact=false"

  def get(self, lat, lng):
    ids = list()
    url = self.VELOV_API_URL_PATTERN
    velov = json.loads(urllib.urlopen(url).read())
    for station in velov['values']:
      station_pos = GEOSGeometry('POINT(%s %s)' % ( station['lng'], station['lat']))
      current_pos = GEOSGeometry('POINT(%f %f)' %  (lng, lat))
      if station_pos.distance(current_pos) * 100 < 0.8:
        yield Item(station['name'],
                  'velov',
                  '%s: %s disponibles, %s places' % (  station['address'], station['available_bikes'], station['available_bike_stands']),
                  station['lat'],
                  station['lng'])

