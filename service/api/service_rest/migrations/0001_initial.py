# Generated by Django 4.0.3 on 2023-04-25 17:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AutomobileVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('color', models.CharField(max_length=50)),
                ('year', models.PositiveSmallIntegerField()),
                ('vin', models.CharField(max_length=17, unique=True)),
                ('sold', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Technician',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=150)),
                ('last_name', models.CharField(max_length=150)),
                ('employee_number', models.PositiveIntegerField(unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customer_name', models.CharField(max_length=250)),
                ('date_time', models.DateTimeField(null=True)),
                ('description', models.TextField()),
                ('VIP', models.BooleanField(default=False, null=True)),
                ('completed', models.BooleanField(default=False, null=True)),
                ('technician', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='appointments', to='service_rest.technician')),
            ],
        ),
    ]
