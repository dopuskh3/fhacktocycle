import json
from django.http import HttpResponse
from django.conf import settings
from django.views.generic import View
from django.contrib.gis.geos import Point, GEOSGeometry
from django.contrib.gis.measure import D
from fhacktocycle.item.models import Items


def searchItems(lat, lng):
  items = []
  for api in settings.ENABLED_APIS:
    for item in api().get(lat, lng):
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
