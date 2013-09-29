import json
from django.http import HttpResponse
from django.conf import settings
from django.views.generic import View
from django.contrib.gis.geos import Point, GEOSGeometry
from django.contrib.gis.measure import D
from fhacktocycle.item.models import Items
from fhacktocycle.apis.weather import WeatherApi


def searchItems(lat, lng):
  items = []
  display_shelters = False
  weather = [ w for w in WeatherApi().get(lat, lng) ][0]
  weather_string = weather.title.lower()

  if 'pluie' in weather_string or 'nuage' in weather_string:
    display_shelters = True

  for api in settings.ENABLED_APIS:
    for item in api().get(lat, lng):
      if (item.type == 'shelter' and display_shelters == True) or \
         item.type != 'shelter':
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
