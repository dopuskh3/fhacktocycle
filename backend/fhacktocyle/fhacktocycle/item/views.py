import json
from django.http import HttpResponse
from django.views.generic import View
from django.contrib.gis.geos import Point
from django.contrib.gis.measure import D
from fhacktocycle.item.models import Items


def encodeItem(item, query_point):
  return {'title': item.title,
          'description': item.description,
          'dst': item.position.distance(query_point),
          'lat': item.position.y,
          'lng': item.position.x,
          'tag': item.tag,
          'url': item.url,
          'dst': 0}

def searchItems(lat, lng):
  point = Point(lat, lng)
  print point
  loItems = Items.objects.filter(position__distance_lt=(Point(lng, lat), D(km=1)))
  return [ encodeItem(item, point) for item in loItems ]


class SearchView(View):

  def _toJson(self, response_data):
    return HttpResponse(json.dumps(response_data), content_type="application/json")

  def process(self, request, *args, **kwargs):
    response_data = searchItems(float(self.args[0]), float(self.args[1]))
    return self._toJson(response_data)

  def get(self, request, *args, **kwargs):
    return self.process(request, *args, **kwargs)
