# Generated by Django 3.0.6 on 2020-05-18 20:26

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hello', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='recording',
            name='array',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=10), default=['111'], size=None),
            preserve_default=False,
        ),
    ]
