from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import Salesperson, Customer, AutomobileVO, Sale

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "import_href"]

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
    ]
    encoders = {
        "automobile": AutomobileVOEncoder()
    }
    def get_extra_data(self, o):
        return{"customer": o.customer.first_name,
               "salesperson": o.salesperson.first_name}




@require_http_methods(['GET', 'POST'])
def api_list_salesperson(request):
    if request.method == "GET": #LIST ALL THE SALESPERSON
        salesperson = Salesperson.objects.all()
        return JsonResponse(
            {"salesperson": salesperson},
            encoder=SalespersonEncoder,
        )
    else: #POST TO CREATE SALESPERSON
        try:
            content = json.loads(request.body)
            salesperson = Salesperson.objects.create(**content)
            return JsonResponse(
                salesperson,
                encoder=SalespersonEncoder,
                safe=False
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the salesperson"}
            )
            response.status_code = 400
            return response

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
        response = JsonResponse({'message': 'salesperson does not exist'})
        response.status_code = 400
        return response


@require_http_methods(['GET', 'POST'])
def api_list_customer(request):
    if request.method=="GET": #GET LIST OF ALL CUSTOMER
        customer = Customer.objects.all()
        return JsonResponse(
            {'customer': customer},
            encoder=CustomerEncoder
        )
    else: #CREATE A NEW CUSTOMER
        try:
            content = json.loads(request.body)
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False
            )
        except:
            response = JsonResponse(
                {"message": "Could not create customer"}
            )
            response.status_code = 400
            return response

@require_http_methods(["DELETE"])
def api_delete_customer(request, id):
    try:
        customer = Customer.objects.get(id=id)
        customer.delete()
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False
        )
    except Customer.DoesNotExist:
        response = JsonResponse({"message": "customer does not exist"})
        response.status_code = 400
        return response

@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    if request.method=="GET": #GET LIST OF ALL THE SALES
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleEncoder,
        )
    else: #CREATE A SALE
        try:
            content = json.loads(request.body)
            sales = Sale.objects.create(**content)
            return JsonResponse(
                sales,
                encoder=SaleEncoder,
                safe=False
            )
        except Sale.DoesNotExist:
            response = JsonResponse(
                {"message": "Could not create sale"}
            )
            response.status_code = 400
            return response

@require_http_methods(["DELETE"])
def api_delete_sale(request, id):
    try:
        sales = Sale.objects.get(id=id)
        sales.delete()
        return JsonResponse(
            sales,
            encoder=SaleEncoder,
            safe=False
        )
    except Sale.DoesNotExist:
        response = JsonResponse({"message": "sale does not exist"})
        response.status_code = 400
        return response
