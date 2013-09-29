from django.db.models import CharField, TextField
from django.contrib.gis.db import models


class Items(models.Model):
  title = CharField(max_length=1024, null=True)
  description = TextField(null=True)
  position = models.PointField(geography=False)
  tag = CharField(max_length=256, null=True)
  url = CharField(max_length=512, null=True)

  objects = models.GeoManager()
