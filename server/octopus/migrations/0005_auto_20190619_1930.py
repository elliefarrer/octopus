# -*- coding: utf-8 -*-
# Generated by Django 1.11.16 on 2019-06-19 19:30
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('octopus', '0004_auto_20190619_1928'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lightbulb',
            name='average200',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='lightbulb',
            name='average250',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='lightbulb',
            name='average300',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='lightbulb',
            name='average350',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='lightbulb',
            name='average400',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='lightbulb',
            name='performance200',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='lightbulb',
            name='performance250',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='lightbulb',
            name='performance300',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='lightbulb',
            name='performance350',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='lightbulb',
            name='performance400',
            field=models.FloatField(default=0),
        ),
    ]