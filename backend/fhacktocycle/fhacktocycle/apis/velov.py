import json
import urllib
import time
from fhacktocycle.apis import Api, Item


class VelovApi(Api):

  TYPE = 'velov'

  VELOV_API_URL_PATTERN = "http://ws.data.grandlyon.com/smartdata/jcd_jcdecaux.jcdvelov/all.json?compact=false"

  def get(self, lat, lng):
    ids = list()
    url = self.VELOV_API_URL_PATTERN
    velov = json.loads(urllib.urlopen(url).read())
    for station in velov['values']:
      yield Item(station['name'],
                 'velov',
                 '%s: %s disponibles, %s places' % (  station['address'], station['available_bikes'], station['available_bike_stands']),
                 station['lat'],
                 station['lng'])

