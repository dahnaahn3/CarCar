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
        "employee_id",
        "id"
    ]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        "last_name",
        "address",
        "phone_number",
        "id"
    ]

class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
        "id",
        "price",
        "salesperson",
        "customer",
        "automobile"
    ]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "salesperson": SalespersonEncoder(),
        "customer": CustomerEncoder()
    }



@require_http_methods(['GET', 'POST'])
def api_list_salesperson(request):
    if request.method == "GET":
        salesperson = Salesperson.objects.all()
        return JsonResponse(
            {"salesperson": salesperson},
            encoder=SalespersonEncoder,
        )
    else:
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
    if request.method=="GET":
        customer = Customer.objects.all()
        return JsonResponse(
            {'customer': customer},
            encoder=CustomerEncoder
        )
    else:
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
    if request.method=="GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleEncoder,
        )
    else:
        content = json.loads(request.body)

        try:
            vin_number = AutomobileVO.objects.get(vin=content["automobile"])
            content["automobile"] = vin_number
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "invalid vin number"},
                status=400
            )

        try:
            salesperson = Salesperson.objects.get(id=content["salesperson"])
            content['salesperson'] = salesperson
        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "salesperson does not exist"},
                status = 400
            )

        try:
            customer = Customer.objects.get(id=content["customer"])
            content["customer"] = customer

        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "customer does not exist"},
                status = 400
            )


        sales = Sale.objects.create(**content)
        return JsonResponse(
            sales,
            encoder=SaleEncoder,
            safe=False
        )


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
