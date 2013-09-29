import json
from django.http import HttpResponse
from django.conf import settings
from django.views.generic import View
from django.contrib.gis.geos import Point, GEOSGeometry
from django.contrib.gis.measure import D
from fhacktocycle.item.models import Items
from fhacktocycle.apis import Item
from fhacktocycle.apis.weather import WeatherApi
from fhacktocycle.utils import getDistance


def searchItems(lat, lng):
  items = []
  display_shelters = False
  weather = [ w for w in WeatherApi().get(lat, lng) ][0]
  weather_string = weather.title.lower()
  has_notify = False

  if 'pluie' in weather_string or 'orage' in weather_string:
    display_shelters = True


  for api in settings.ENABLED_APIS:
    for item in api().get(lat, lng):
      if (item.type == 'shelter' and display_shelters == True) or \
         item.type != 'shelter':
        distance = getDistance((item.lat, item.lng), (lat, lng) )
        if distance < settings.NOTIFICATION_THRESHOLD and not has_notify and not item.type == 'weather':
          print "Notify!"
          has_notify = True
          items.append(Item('notify', 'notify', 'at %s m' % distance, 0, 0).toDict())

        items.append(item.toDict())

  return items


class SearchView(View):

  def _toJson(self, response_data):
    return HttpResponse(json.dumps(response_data), content_type="application/json")

  def process(self, request, *args, **kwargs):
    response_data = searchItems(float(self.args[0]), float(self.args[1]))
    return self._toJson(response_data)

  def get(self, request, *args, **kwargs):
    return self.process(request, *args, **kwargs)
