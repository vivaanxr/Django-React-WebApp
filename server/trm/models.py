from django.db import models

class Trm(models.Model):
    name = models.CharField(max_length=120)
    phoneNumber = models.CharField(max_length=20)
    email= models.CharField(max_length=320)
    role=models.CharField(max_length=10, default='Regular') 

    def _str_(self):
        return self.name