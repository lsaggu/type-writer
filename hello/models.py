from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class Greeting(models.Model):
    when = models.DateTimeField("date created", auto_now_add=True)


# recordings table
class Recording(models.Model):
    name = models.CharField(max_length=255)
    dateTime = models.DateTimeField("Date/Time Created")
    array = ArrayField(models.IntegerField())
