import unittest
from fhacktocycle.apis.weather import WeatherApi


class WeatherApiTest(unittest.TestCase):

  def testSimpleQuery(self):
    item = WeatherApi().get(45.760443, 4.8265868)
    item.toDict()



if __name__ == "__main__":
  unittest.main()
