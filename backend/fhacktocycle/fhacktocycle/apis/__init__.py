import json


class Item(object):
  def __init__(self, title, type, description, lat, lng, url='', distance=0.0):
    self.title = title
    self.type = type
    self.description = description
    self.lat = lat
    self.lng = lng
    self.url = url

  def toDict(self):
    return {'title': self.title,
            'type': self.type,
            'description': self.description or '',
            'lat': self.lat,
            'lng': self.lng,
            'url': self.url or ''}

  def toJson(self):
    return json.dumps(self.toDict())


class Api(object):

  def get(self, lat, lng):
    raise NotImplementedError("This method must be overloaded.")
