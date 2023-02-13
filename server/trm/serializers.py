from rest_framework import serializers
from .models import Trm

class TrmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trm
        fields = ('id', 'name', 'phoneNumber', 'email', 'role')