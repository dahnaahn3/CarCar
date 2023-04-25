from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import Salesperson, Customer, AutomobileVO, Sale

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["import_href", "vin"]

class SalespersonEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "first_name",
        "last_name",
        "employee_id"
    ]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        "last_name",
        "address",
        "phone_number"
    ]

class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
        "price",
        "automobile",
        "salesperson",
        "customer"
    ]
    def get_extra_data(self, o):
        return{"automobile": o.automobile.vin}

    def get_extra_data(self,o):
        return{"salesperson": o.salesperson.first_name}

    def get_extra_data(self, o):
        return{"customer": o.customer.first_name}


@require_http_methods(['GET', 'POST'])
def api_list_salesperson(request):
    if request.method == "GET": #LIST ALL THE SALESPERSON
        salesperson = Salesperson.objects.all()
        return JsonResponse(
            {"salesperson": salesperson},
            encoder=SalespersonEncoder
        )
    else: #POST TO CREATE SALESPERSON
        content = json.loads(request.body)
        salesperson = Salesperson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalespersonEncoder,
            safe=False
        )

@require_http_methods(["DELETE"])
def api_delete_salesperson(request, id):
    try:
        salesperson = Salesperson.objects.get(id=id)
        salesperson.delete()
        return JsonResponse(
            salesperson,
            encoder=SalespersonEncoder,
            safe=False
        )
    except Salesperson.DoesNotExist:
        return JsonResponse({'message': 'salesperson does not exist'})
