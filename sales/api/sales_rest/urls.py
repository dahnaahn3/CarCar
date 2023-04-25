from django.urls import path
from .views import api_list_salesperson, api_delete_salesperson

urlpatterns = [
    path("salespeople/", api_list_salesperson, name="api_list_salesperson"),
    path("salespeople/<int:id>/", api_delete_salesperson, name="api_delete_salesperson")
]
