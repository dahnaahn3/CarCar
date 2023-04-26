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
        'employee_number',
        'id'
    ]

class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "customer_name",
        "date_time",
        "description",
        "VIP",
        "completed",
        "canceled",
        "technician",
        "id",
        "vin",
        "completed",
        "id"
    ]
    encoders={
        'technician': TechnicianEncoder(),
    }


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
                {"Error": "Technicians do not exist"}, status=404
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
            
@require_http_methods(["GET", "POST"])
def api_appointments(request, vin=None):
    if request.method == "GET":
        try:
            if vin is not None:
                appointments = Appointment.objects.filter(vin=vin)
            else:
                appointments = Appointment.objects.all()
            return JsonResponse(
                {"appointments": appointments},
                encoder=AppointmentEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"Error": "Appointments does not exist"}
            )
    else: #POST
        try:
            content = json.loads(request.body)
            try:
                technician = Technician.objects.get(employee_number=content["technician"])
                content['technician'] = technician
            except Technician.DoesNotExist:
                return JsonResponse(
                    {"Error": "Technician does not exist"}
                )
            try:
                if AutomobileVO.objects.filter(vin=content['vin']).exists():
                    content["VIP"] = True
            except AutomobileVO.DoesNotExist:
                content["VIP"] = False
            
            appointment = Appointment.objects.create(**content)
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"Error": "Creation Failed"}
            )
            
@require_http_methods(["GET", "DELETE"])
def api_appointment(request, id):
    if request.method == "GET":
        try:
            appointment = Appointment.objects.get(id=id)
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"Error": "Appointment does not exist"},
                status= 404,
            )
    else:
        try:
            appointment = Appointment.objects.get(id=id)
            appointment.delete()
            return JsonResponse(
                    {"Deleted": "Successfully deleted Appointment"}
                )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"Message": "Does not exist"}
            )

@require_http_methods(["PUT"])
def api_appointment_cancel(request,id):

        try:
            content = json.loads(request.body)
            if "appointment" in content:
                appointment = Appointment.objects.get(id=id)
            
            Appointment.objects.filter(id=id).update(**content)
            appointment = Appointment.objects.get(id=id)
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "Update Failed"},
                status=400
            )
            
@require_http_methods(["PUT"])
def api_appointment_complete(request,id):

        try:
            content = json.loads(request.body)
            if "appointment" in content:
                appointment = Appointment.objects.get(id=id)
            
            Appointment.objects.filter(id=id).update(**content)
            appointment = Appointment.objects.get(id=id)
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "Update Failed"},
                status=400
            )