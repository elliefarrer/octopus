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
    weight = models.IntegerField()
    height = models.IntegerField()
    width = models.IntegerField()
    depth = models.IntegerField()
    colour = models.CharField(max_length=50)
    description = models.TextField()
    price = models.IntegerField()
    performance200 = models.IntegerField()
    performance250 = models.IntegerField()
    performance300 = models.IntegerField()
    performance350 = models.IntegerField()
    performance400 = models.IntegerField()
    stock = models.IntegerField()

    def __str__(self):
        return self.name
