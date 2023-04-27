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
<br>

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
The GET request will return a list of all the customer details information with the key "customer".

</details>

<details>
<summary>Making an insomnia POST request to create a new technician in the Services microservice</summary>
<br>

    {
	"first_name": "Sean",
	"last_name":"Myrom",
	"employee_number": "101"
    }
Requires a first_name, last_name, and employee_number field.
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
<br>

    {
        "first_name": "Curiouserer",
        "last_name": "George",
        "employee_id": "Cgeorge",
    }
Requires a first name, last name, employee id, and ID field.
</details>

---
### Customers insomnia requests

<details>
<summary>Making an insomnia GET request to list all customers in the Sales microservice</summary>
<br>

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
The GET request will return a list of all the customer details detail information with the key "customer".

</details>

<details>
<summary>Making an insomnia POST request to create a new customer in the Sales microservice</summary>
<br>

    {
    "first_name": "testing",
    "last_name": "test",
    "address": "123 house",
    "phone_number": 123456789
    }
Requires a first name, last name, address, and phone number field.
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
<br>

    {
	"price": 1234567,
	"salesperson": 1,
	"customer": 1,
	"automobile": "1C3CC5FB2AN120174"
    }
Requires the price, the id of an existing salesperson, id of an existing customer, and VIN of an existing automobile.
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
<br>

    {
    "name": "Chrysler"
    }
The PUT request only requires the updated name of the manufacturer.
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
<br>

    {
	"name": "Tesla"
    }
Requires the name of the manufacturer.
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
<br>

    {
    "name": "Sebring",
    "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg"
    }
The PUT request requires the updated name and picture URL of the vehicle model.
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
<br>

    {
    "name": "Sebring",
    "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
    "manufacturer_id": 1
    }
Requires the name of the vehicle model, a URL of the image, and the id of the manufacturer.
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
<br>

    {
    "color": "red",
    "year": 2012,
    "sold": true
    }
The PUT request requires the updated color, year and whether the automobile has been sold as true or false.
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
<br>

    {
    "color": "red",
    "year": 2012,
    "vin": "1C3CC5FB2AN120174",
    "model_id": 1
    }
Requires the color of the automobile, the year it was created, a unique VIN number, and the id of the vehicle model.
</details>

---

# Diagram
![diagram](/diagram.png)
The autombile is the value object in both microservices it does not have its own identity and is interchangeable.
