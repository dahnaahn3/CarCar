# Generated by Django 4.0.3 on 2023-04-26 17:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0005_remove_automobilevo_color_remove_automobilevo_model_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='canceled',
            field=models.BooleanField(default=False, null=True),
        ),
    ]
