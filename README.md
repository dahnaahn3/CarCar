# CarCar

## Team:
Dahna Ahn - Sales

Matthew Huff - Services


# Step-by-step Instructions to Run the Project:
---------------------------------------------------------
1. Fork and clone the repository at https://gitlab.com/sjp19-public-resources/sjp-2022-april/project-beta

2. Add member as a 'Maintainer' to the project and have each member clone the same repository to their own local computers

3. Run the following commands in the order listed below in the terminal at the project directory level.

    `docker volume create beta-data`

    This command creates a new volume named ‘beta-data’ that containers can consume and store data.

    `docker-compose build`

    This command builds all the images we specify in the docker-compose.yml file.

    `docker-compose up`

    This command builds containers based on the images we created.


# Service microservice
## List of URL, ports, CRUD
![services microservice](/ServicesREADME.png)
### Technicians Insomnia requests

<details>
<summary>Making an insomnia GET request to list all technicians in the Services microservice</summary>

```
    {
        "technicians": [
            {
                "first_name": "Sean",
                "last_name": "Myrom",
                "employee_number": 101,
                "id": 2
            },

            ...
        ]
    }
```
The GET request will return a dictionarey with the key "technicians" with a value of a list of dictionaries with the keys for first_name, last_name, employee_number, and id.

</details>

<details>
<summary>Making an insomnia POST request to create a new technician in the Services microservice</summary>
JSON Body:

```
    {
	"first_name": "Sean",
	"last_name":"Myrom",
	"employee_number": "101"
    }
```

Requires a first_name, last_name, and employee_number field.

Returns:
```
    {
	"first_name": "Sean",
	"last_name": "Myrom",
	"employee_number": "101"
    }
```
The employee_number serves as the unique identifyer. 
</details>



---
### Appointments Insomnia requests

<details>
<summary>Making an insomnia GET request to list all appointments in the Services microservice</summary>

```

    {
        "appointments": [
            {
                "href": "/api/appointments/3",
                "customer_name": "Jane Smith",
                "date_time": "2023-03-11T09:00:00+00:00",
                "description": "Oil change",
                "VIP": true,
                "completed": true,
                "canceled": false,
                "technician": {
                    "first_name": "Sean",
                    "last_name": "Myrom",
                    "employee_number": 101,
                    "id": 2
                },
                "id": 3,
                "vin": "sdlkfj123"
            },

            ...
        ]
    }
```
The GET request will return a list of all the appointments.

</details>

<details>
<summary>Making an insomnia POST request to create a new appointment in the Services microservice</summary>

```

    {
    "vin": "sdlkfj123777",
    "customer_name": "Jane Smith",
    "description": "Oil change",
    "date_time": "2023-03-11T09:00:00",
    "technician": 101
    }
```

Requires a vin, customer_name, description, date_time and technician field.

Returns:
```
    {
	"href": "/api/appointments/8",
	"customer_name": "Jane Smith",
	"date_time": "2023-03-11T09:00:00",
	"description": "Oil change",
	"VIP": false,
	"completed": false,
	"canceled": false,
	"technician": {
		"first_name": "Sean",
		"last_name": "Myrom",
		"employee_number": 101,
		"id": 2
	},
	"id": 8,
	"vin": "sdlkfj123777"
    }
```
</details>

<details>
<summary>Making an insomnia PUT request to update the canceled property in the Services microservice</summary>

```

    {
        "canceled": true
    }
```
Returns:

```
    {
        "href": "/api/appointments/4",
        "customer_name": "Test",
        "date_time": "2023-04-26T22:39:00+00:00",
        "description": "Ring",
        "VIP": false,
        "completed": false,
        "canceled": true,
        "technician": {
            "first_name": "Sean",
            "last_name": "Myrom",
            "employee_number": 101,
            "id": 2
        },
        "id": 4,
        "vin": "FOUR"
    }
```
The return is the detail view of the appointment with the id and the updated canceled property set to true.
</details>

<details>
<summary>Making an insomnia PUT request to update the completed property in the Services microservice</summary>

```

    {
        "completed": true
    }
```
Returns:

```
    {
        "href": "/api/appointments/4",
        "customer_name": "Test",
        "date_time": "2023-04-26T22:39:00+00:00",
        "description": "Ring",
        "VIP": false,
        "completed": true,
        "canceled": false,
        "technician": {
            "first_name": "Sean",
            "last_name": "Myrom",
            "employee_number": 101,
            "id": 2
        },
        "id": 4,
        "vin": "FOUR"
    }
```
The return is the detail view of the appointment with the id and the updated completed property set to true.
</details>


---

# Sales microservice
## List of URL, ports, CRUD
![sales microservice](/SalesREADME.png)
---
### Salespeople insomnia requests

<details>
<summary>Making an insomnia GET request to list all salespeople in the Sales microservice</summary>
<br>

    {
	    "salesperson": [
		    {
			"first_name": "Curiouserer",
			"last_name": "George",
			"employee_id": "Cgeorge",
			"id": 1
		    }
	    ]
    }
The GET request will return a list of all the salespeople detail information with the key "salesperson".

</details>

<details>
<summary>Making an insomnia POST request to create a new salesperson in the Sales microservice</summary>

```

    {
        "first_name": "Curiouserer",
        "last_name": "George",
        "employee_id": "Cgeorge",
    }
```
Requires a first name, last name, employee id, and ID field.

Returns:
```
{
	"first_name": "Curiouserer",
	"last_name": "George",
	"employee_id": "Cgeorge",
	"id": 2
}
```
The return includes the id property for the new salesperson.
</details>

---
### Customers insomnia requests

<details>
<summary>Making an insomnia GET request to list all customers in the Sales microservice</summary>

```

    {
	"customer": [
            {
                "first_name": "d",
                "last_name": "test",
                "address": "123 house",
                "phone_number": 123456789,
                "id": 1
            }
	    ]
    }
```
The GET request will return a list of all the customer details detail information with the key "customer".

</details>

<details>
<summary>Making an insomnia POST request to create a new customer in the Sales microservice</summary>

```

    {
    "first_name": "testing",
    "last_name": "test",
    "address": "123 house",
    "phone_number": 123456789
    }
```
Requires a first name, last name, address, and phone number field.

Returns:
```
    {
	"first_name": "testing",
	"last_name": "test",
	"address": "123 house",
	"phone_number": 123456789,
	"id": 1
}

```
The return includes the id property for the new customer.


</details>

---
### Sales insomnia requests

<details>
<summary>Making an insomnia GET request to list all sales in the Sales microservice</summary>
<br>

    {
        "sales": [
            {
                "id": 1,
                "price": 1234567,
                "salesperson": {
                    "first_name": "Curiouserer",
                    "last_name": "George",
                    "employee_id": "Cgeorge",
                    "id": 1
                },
                "customer": {
                    "first_name": "d",
                    "last_name": "test",
                    "address": "123 house",
                    "phone_number": 123456789,
                    "id": 1
                },
                "automobile": {
                    "vin": "1C3CC5FB2AN120174",
                    "import_href": "/api/automobiles/1C3CC5FB2AN120174/"
                }
            }
        ]
    }
The GET request will return return the details of the sale with the key "sales". Inside the "sales" there will be three dictionaries with the keys of "salesperson", "customer", and "automobile" that show the details of the salesperson, customer, and automobile, respectively.
</details>


<details>
<summary>Making an insomnia POST request to create a new sale in the Sales microservice</summary>

```

    {
	"price": 1234567,
	"salesperson": 1,
	"customer": 1,
	"automobile": "1C3CC5FB2AN120174"
    }
```
Requires the price, the id of an existing salesperson, id of an existing customer, and VIN of an existing automobile.

Returns:
```
{
	"id": 1,
	"price": 1234567,
	"salesperson": {
		"first_name": "Matthew",
		"last_name": "Huff",
		"employee_id": "460",
		"id": 1
	},
	"customer": {
		"first_name": "testing",
		"last_name": "test",
		"address": "123 house",
		"phone_number": 123456789,
		"id": 1
	},
	"automobile": {
		"vin": "ASD12340",
		"import_href": "/api/automobiles/ASD12340/"
	}
}

```
The return includes the information of the sales person, customer, and automobile associated with the id properties and the VIN of the vehicle.
</details>

---

# Inventory microservice
## List of URL, ports, CRUD
![inventory microservice](/InventoryREADME.png)

---
### Manufacturers insomnia requests
<details>
<summary>Making an insomnia GET request to list all the manufacturers in the Inventory microservice</summary>
<br>

    {
        "manufacturers": [
            {
            "href": "/api/manufacturers/1/",
            "id": 1,
            "name": "Daimler-Chrysler"
            }
        ]
    }
The GET request will return a list of all the manufacturers and details at the key "manufacturers".
</details>

<details>
<summary>Mang an insomnia PUT request to update a specific manufacturer in the Inventory microservice</summary>

```

    {
    "name": "Chrysler"
    }
```
The PUT request only requires the updated name of the manufacturer.

Returns:
```
    {
        "href": "/api/manufacturers/1/",
        "id": 1,
        "name": "Chrysler"
    }

```
The return is the detail view with the updated property value.
</details>


<details>
<summary>Making an insomnia GET request to get the details of a specific manufacturer in the Inventory microservice</summary>
<br>

    {
    "href": "/api/manufacturers/1/",
    "id": 1,
    "name": "Chrysler"
    }
The GET request at the specified ID will return the name, href, and ID of the manufacturer.
</details>

<details>
<summary>Making an insomnia POST request to create a new manufacturer in the Inventory microservice</summary>

```

    {
	"name": "Tesla"
    }
```
Requires the name of the manufacturer.

Returns:
```
   {
	"href": "/api/manufacturers/4/",
	"id": 4,
	"name": "Tesla"
} 
The return includes the created id property and href property.
```
</details>

---

### Vehicle models insomnia requests
<details>
<summary>Making an insomnia GET request to list all the vehicle models in the Inventory microservice</summary>
<br>

    {
        "models": [
            {
            "href": "/api/models/1/",
            "id": 1,
            "name": "Sebring",
            "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
            "manufacturer": {
                "href": "/api/manufacturers/1/",
                "id": 1,
                "name": "Daimler-Chrysler"
            }
            }
        ]
    }
The GET request will return a list of all the vehicle models and details at the key "models".
</details>

<details>
<summary>Mang an insomnia PUT request to update a specific vehicle model in the Inventory microservice</summary>

```

    {
    "name": "Sebring",
    "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg"
    }
```
The PUT request requires the updated name and picture URL of the vehicle model.

Returns:
```
{
	"href": "/api/models/1/",
	"id": 1,
	"name": "Sebring",
	"picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
	"manufacturer": {
		"href": "/api/manufacturers/1/",
		"id": 1,
		"name": "Chrysler"
	}
}
```
The return is the updated detail view with the modifed name and picature_url.
</details>

<details>
<summary>Making an insomnia GET request to get the details of a vehicle model in the Inventory microservice</summary>
<br>

    {
    "href": "/api/models/1/",
    "id": 1,
    "name": "Sebring",
    "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
    "manufacturer": {
        "href": "/api/manufacturers/1/",
        "id": 1,
        "name": "Daimler-Chrysler"
    }
    }
The GET request will return the href, id, name, picture URL of the vehicle model and the manufacturer information.
</details>

<details>
<summary>Making an insomnia POST request to create a new vehicle model in the Inventory microservice</summary>

```

    {
    "name": "Sebring",
    "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
    "manufacturer_id": 1
    }
```
Requires the name of the vehicle model, a URL of the image, and the id of the manufacturer.

Returns:
```
    {
	"href": "/api/models/3/",
	"id": 3,
	"name": "Sebring",
	"picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
	"manufacturer": {
		"href": "/api/manufacturers/1/",
		"id": 1,
		"name": "Chrysler"
	}
}

```
The return is the detail view of the new model. 
</details>

---

### Automobiles insomnia requests
<details>
<summary>Making an insomnia GET request to list all the automobiles in the Inventory microservice</summary>
<br>

    {
    "autos": [
        {
        "href": "/api/automobiles/1C3CC5FB2AN120174/",
        "id": 1,
        "color": "yellow",
        "year": 2013,
        "vin": "1C3CC5FB2AN120174",
        "model": {
            "href": "/api/models/1/",
            "id": 1,
            "name": "Sebring",
            "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
            "manufacturer": {
            "href": "/api/manufacturers/1/",
            "id": 1,
            "name": "Daimler-Chrysler"
            }
        },
        "sold": false
        }
    ]
    }

The GET request will return a list of all the automobiles and details at the key "autos".
</details>

<details>
<summary>Mang an insomnia PUT request to update a specific automobile in the Inventory microservice</summary>

```

    {
    "color": "red",
    "year": 2012,
    "sold": true
    }
```
The PUT request requires the updated color, year and whether the automobile has been sold as true or false.

Returns:
```
    {
	"href": "/api/automobiles/12k3jlhnb1kl23/",
	"id": 4,
	"color": "red",
	"year": 2012,
	"vin": "12k3jlhnb1kl23",
	"model": {
		"href": "/api/models/1/",
		"id": 1,
		"name": "Sebring",
		"picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
		"manufacturer": {
			"href": "/api/manufacturers/1/",
			"id": 1,
			"name": "Chrysler"
		}
	},
	"sold": true
}

```
The return is the detail view with the updated properties.
</details>

<details>
<summary>Making an insomnia GET request to get the details of a automobile in the Inventory microservice</summary>
<br>

    {
    "href": "/api/automobiles/1C3CC5FB2AN120174/",
    "id": 1,
    "color": "yellow",
    "year": 2013,
    "vin": "1C3CC5FB2AN120174",
    "model": {
        "href": "/api/models/1/",
        "id": 1,
        "name": "Sebring",
        "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
        "manufacturer": {
        "href": "/api/manufacturers/1/",
        "id": 1,
        "name": "Daimler-Chrysler"
        }
    },
    "sold": false
    }
The GET will request return the details of the automobile and the details of the model.
</details>


<details>
<summary>Making an insomnia POST request to create a new automobile in the Inventory microservice</summary>

```

    {
    "color": "red",
    "year": 2012,
    "vin": "1C3CC5FB2AN120174",
    "model_id": 1
    }
```
Requires the color of the automobile, the year it was created, a unique VIN number, and the id of the vehicle model.

Returns:
```
{
	"href": "/api/automobiles/1C3CC5FB2AN120174/",
	"id": 8,
	"color": "red",
	"year": 2012,
	"vin": "1C3CC5FB2AN120174",
	"model": {
		"href": "/api/models/1/",
		"id": 1,
		"name": "Sebring",
		"picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
		"manufacturer": {
			"href": "/api/manufacturers/1/",
			"id": 1,
			"name": "Chrysler"
		}
	},
	"sold": false
}

```
The return is the detail view of the new Automobile.
</details>

---

# Diagram
![diagram](/diagram.png)
The autombile is the value object in both microservices it does not have its own identity and is interchangeable.
