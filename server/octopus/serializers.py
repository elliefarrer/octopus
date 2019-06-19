from rest_framework import serializers
from octopus.models import Lightbulb


class LightbulbSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lightbulb
        fields = '__all__'
