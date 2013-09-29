import json
import urllib
import time
from fhacktocycle.apis import Api, Item


class WikilocationApi(Api):

  TYPE = 'wikipedia'

  URL_PATTERN = 'http://api.wikilocation.org/articles?lat=%(lat)s&lng=%(lng)s&radius=1000'

  def get(self, lat, lng):
    ids = list()
    url = self.URL_PATTERN % { 'lat': lat, 'lng': lng }
    articles = json.loads(urllib.urlopen(url).read())
    for article in articles['articles']:
      item = Item(article['title'],
                 'wikipedia',
                 '',
                 article['lat'],
                 article['lng'],
                 url=article['url'])
      print item.toJson()
      yield item

