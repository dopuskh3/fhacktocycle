import json
import urllib
import time
from fhacktocycle.apis import Api, Item


class WeatherApi(Api):

  TYPE = 'weather'

  WEATHER_API_URL_PATTERN = "http://api.openweathermap.org/data/2.5/forecast?lat=%(lat)s&lon=%(lng)s&lang=fr"

  def get(self, lat, lng):
    url = self.WEATHER_API_URL_PATTERN % { 'lat':lat, 'lng': lng}
    print url
    forecast = json.loads(urllib.urlopen(url).read())
    ts = time.time()
    forecast_ts = [ x['dt'] for x in forecast['list'] if x > ts ]
    forecasts  = dict([ (f['dt'], f) for f in forecast['list'] ])
    next_dt = min(forecast_ts, key=lambda x:  x - ts)
    next_fc = forecasts[next_dt]
    yield Item(', '.join([ w['description'] for w in next_fc['weather'] ]),
               self.TYPE,
               'Prevu pour : %s' % next_fc['dt_txt'],
                lat,
                lng,
                '')


