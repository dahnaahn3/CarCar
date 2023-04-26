# CarCar

Team:


* Dahna - Sales
* Matthew Huff - Services


## Design

# Step-by-step Instructions to Run the Project:
1. Fork and clone the repository at https://gitlab.com/sjp19-public-resources/sjp-2022-april/project-beta
2. Add member as a 'Maintainer' to the project and have each member clone the same repository to their own local computers
3. Run the following commands in the order listed below in the terminal at the project directory level.
    *docker volume create beta-data*
        -This command creates a new volume named ‘beta-data’ that containers can consume and store data.
    *docker-compose build*
        -This command builds all the images we specify in the docker-compose.yml file.
    *docker-compose up*
        -This command builds containers based on the images we created.


# Service microservice-List of URL
![service microservice](/Service-urls-ports-CRUD.png)


# Sales microservice
![sales microservice](/Sales-urls-ports-CRUD.png)
