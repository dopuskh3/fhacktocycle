from geopy.point import Point
from geopy import distance

def getDistance(p1, p2):
  pt1 = Point('%f;%f' % (p1[0], p1[1]))
  pt2 = Point('%f;%f' % (p2[0], p2[1]))
  return distance.distance(pt1, pt2).meters

