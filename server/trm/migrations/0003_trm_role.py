# Generated by Django 4.1.6 on 2023-02-12 21:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trm', '0002_alter_trm_phonenumber'),
    ]

    operations = [
        migrations.AddField(
            model_name='trm',
            name='role',
            field=models.CharField(default='regular', max_length=10),
        ),
    ]
