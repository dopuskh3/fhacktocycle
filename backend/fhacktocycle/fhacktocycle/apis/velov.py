import json
import urllib
import time
from fhacktocycle.apis import Api, Item


class WeatherApi(Api):

  TYPE = 'velov'

  VELOV_API_URL_PATTERN = "http://ws.data.grandlyon.com/smartdata/jcd_jcdecaux.jcdvelov/all.json?field=gid&value=%(description)&compact=false"

  def get(self, description):
    url = self.VELOV_API_URL_PATTERN % { 'description': description }
    print url
    velov = json.loads(urllib.urlopen(url).read())
    yield Item(', '.join([ w['description'] for w in next_fc['weather'] ]),
               self.TYPE,
               'Prevu pour : %s' % next_fc['dt_txt'],
                lat,
                lng,
                '')


