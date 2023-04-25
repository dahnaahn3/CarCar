from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import AutomobileVO, Appointment, Technician
from common.json import ModelEncoder
import json
# Create your views here.

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        'first_name',
        'last_name',
        'employee_number'
    ]

class AppointmentEncoder(ModelEncoder):
    model = Appointment


@require_http_methods(["GET", "POST"])
def api_technicians(request):
    if request.method == "GET":
        try:
            technicians = Technician.objects.all()
            return JsonResponse(
                {"technicians": technicians},
                encoder=TechnicianEncoder,
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {"Error": "Technicians do not exist"}, status=400
            )
    else: # POST
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {"Error": "Technician does not exitist"}
            )

@require_http_methods(["GET", "DELETE"])
def api_technician(request, id):
    if request.method == "GET":
        try:
            technician = Technician.objects.get(employee_number=id)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {"Error": "Invalid Technician Employee Number"},
                status=400
            )
    elif request.method == "DELETE":
        try:
            technician = Technician.objects.get(employee_number=id)
            technician.delete()
            return JsonResponse(
                {"Deleted": "Successfully deleted Technician"}
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {"Message": "Does not exist"}
            )
            
