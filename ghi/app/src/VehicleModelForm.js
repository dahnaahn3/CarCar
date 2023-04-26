import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function VehicleModelForm(){
    const[manufacturers, setManufacturers] = useState([]);

    const[modelName, setModelName] = useState('')
    const[pictureURL, setPictureURL] = useState('')
    const[manufacturerName, setManufacturerName] = useState('')

    const handleModelNameChange = (event) => {
        const value = event.target.value;
        setModelName(value)
    }
    const handlePictureURLChange = (event) => {
        const value = event.target.value;
        setPictureURL(value)
    }
    const handleManufacturerNameChange = (event) => {
        const value = event.target.value;
        setManufacturerName(value)
    }
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
        name: modelName,
        picture_url: pictureURL,
        manufacturer_id: manufacturerName
    }

        const vehicleModelURL = "http://localhost:8100/api/models/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const response = await fetch(vehicleModelURL, fetchConfig);
        if(response.ok){
            const newVehicleModel = await response.json();
            setModelName('');
            setPictureURL('');
            setManufacturerName('');
            navigate('/models')
        }
    }

    const fetchData = async () => {
        const url = 'http://localhost:8100/api/manufacturers/'
        const response = await fetch(url)
        if(response.ok){
            const data = await response.json();
            setManufacturers(data.manufacturers)
        }
    }
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Create a vehicle model</h1>
              <form onSubmit={handleSubmit} id="create-vehicle-model-form">

                <div className="form-floating mb-3">
                  <input value={modelName} onChange={handleModelNameChange} placeholder="modelName" required type="text" name="modelName" id="modelName" className="form-control"/>
                  <label htmlFor="modelName">Model name...</label>
                </div>

                <div className="form-floating mb-3">
                  <input value={pictureURL} onChange={handlePictureURLChange} placeholder="pictureURL" required type="url" name="pictureURL" id="pictureURL" className="form-control"/>
                  <label htmlFor="pictureURL">Picture URL...</label>
                </div>

                <div className="mb-3">
                  <select onChange={handleManufacturerNameChange} required name="manufacturer" id="manufacturer" className="form-select">
                    <option value={manufacturerName}>Choose a manufacturer...</option>
                    {manufacturers.map(manufacturer =>{
                        return(
                            <option key={manufacturer.id} value={manufacturer.id}>
                                {manufacturer.name}
                            </option>
                        )
                    })}
                  </select>
                </div>

                <button className="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
      );
}

export default VehicleModelForm
