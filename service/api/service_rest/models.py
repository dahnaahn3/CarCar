from django.db import models
from django.urls import reverse
# Create your models here.


class Technician (models.Model):
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    employee_number = models.PositiveIntegerField(unique=True)
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    
    def get_api_url(self):
        return reverse('api_technicians', kwargs={'id': self.id})
    
class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True, null=True)
    vin = models.CharField(max_length=17, unique=True, null=True)
    def __str__(self):
        return self.vin

class Appointment(models.Model):
    vin = models.CharField(max_length=17, null=True)
    customer_name = models.CharField(max_length=250)
    date_time = models.DateTimeField(null=True)
    description = models.TextField()
    VIP = models.BooleanField(default=False, null=True)
    completed = models.BooleanField(default=False, null=True)
    canceled = models.BooleanField(default=False, null=True)
    
    technician = models.ForeignKey(
        Technician,
        related_name='appointments', 
        on_delete= models.PROTECT
    )
    
    def get_api_url(self):
        return reverse('api_appointment', kwargs={'id': self.id})