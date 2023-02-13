from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TrmSerializer
from .models import Trm

class TrmView(viewsets.ModelViewSet):
    serializer_class = TrmSerializer
    queryset = Trm.objects.all()
