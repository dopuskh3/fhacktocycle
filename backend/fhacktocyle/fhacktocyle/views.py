import json
from django.http import HttpResponse
from django.views.generic import View

def searchItems(query):
  return [{'foo': 'bar'}]


class SearchView(View):

  http_method_names = ['get', 'post']

  def _toJson(self, response_data):
    return HttpResponse(json.dumps(response_data), content_type="application/json")

  def process(self, request, *args, **kwargs):
    print request, args, kwargs
    query_string = request.POST.get('q', None)
    if query_string is None:
      return self._toJson({})
    response_data = searchItems()
    return self._toJson(response_data)

  def get(self, request, *args, **kwargs):
    return self.process(request, *args, **kwargs)

