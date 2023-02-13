from django.contrib import admin
from .models import Trm

class TrmAdmin(admin.ModelAdmin):
    list_display = ('name', 'phoneNumber', 'email')

admin.site.register(Trm, TrmAdmin)
