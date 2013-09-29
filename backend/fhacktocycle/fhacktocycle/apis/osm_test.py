
import unittest
from django.test import TestCase

class OsmApiTest(TestCase):

  def testOsmApi(self):
    for i in OsmApi().get(45.7723224, 4.871640999999999):
      print i.toDict()
