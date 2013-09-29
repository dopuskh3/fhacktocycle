import unittest
from fhacktocycle.apis.weather import WeatherApi


class WeatherApiTest(unittest.TestCase):

  def testSimpleQuery(self):
    for i in WeatherApi().get(45.760443, 4.8265868):
      i.toDict()



if __name__ == "__main__":
  unittest.main()
