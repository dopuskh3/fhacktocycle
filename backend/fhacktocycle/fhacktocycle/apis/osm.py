from django.contrib.gis.geos import Point, GEOSGeometry
from django.contrib.gis.measure import D
from fhacktocycle.apis import Api, Item
from fhacktocycle.item.models import Items


class OsmApi(Api):

  def get(self, lat, lng):
    point = GEOSGeometry('POINT(%f %f)' % ( lng, lat))
    items = Items.objects.filter(position__distance_lt=(Point(lng, lat), D(m=500)))
    for item in items:
      dst = item.position.distance(point) * 100000
      yield Item(item.title, item.tag, item.description, item.position.y, item.position.x, distance=dst)




