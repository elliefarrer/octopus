# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Lightbulb(models.Model):
    name = models.CharField(max_length=50)
    item_no = models.CharField(max_length=6)
    img = models.CharField(max_length=200)
    wattage = models.IntegerField()
    quantity = models.IntegerField()
    brand = models.CharField(max_length=50)
    weight = models.IntegerField(default=0)
    height = models.FloatField(default=0)
    width = models.FloatField(default=0)
    depth = models.FloatField(default=0)
    colour = models.CharField(max_length=50)
    description = models.TextField()
    price = models.FloatField(default=0)
    performance200 = models.FloatField(default=0)
    performance250 = models.FloatField(default=0)
    performance300 = models.FloatField(default=0)
    performance350 = models.FloatField(default=0)
    performance400 = models.FloatField(default=0)
    average200 = models.FloatField(default=0)
    average250 = models.FloatField(default=0)
    average300 = models.FloatField(default=0)
    average350 = models.FloatField(default=0)
    average400 = models.FloatField(default=0)
    stock = models.IntegerField(default=0)

    def __str__(self):
        return self.name
