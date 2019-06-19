# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.

from octopus.models import Lightbulb
from octopus.serializers import LightbulbSerializer
from rest_framework import generics


class LightbulbCreate(generics.ListCreateAPIView):
    queryset = Lightbulb.objects.all()
    serializer_class = LightbulbSerializer
