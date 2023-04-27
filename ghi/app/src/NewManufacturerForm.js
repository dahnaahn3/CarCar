import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewManufacturerForm({manufacturers, getManufacturers}){
    const navigate = useNavigate();
    const [name, setName] = useState('');


    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.name = name;

        const url = 'http://localhost:8100/api/manufacturers/';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const response = await fetch(url, fetchConfig);

        if (response.ok){
            setName('')
            navigate('/manufacturers')
        }
    }
    return(
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                <h1>Create a new manufacturer</h1>
                <form onSubmit={handleSubmit} id="create-appointment-form">
                    <div className="form-floating mb-3">
                        <input onChange={handleNameChange} placeholder="Manufacturer name" required type="text" name = "name" id="name" className="form-control" value={name}/>
                        <label htmlFor="name">Manufacturer name</label>
                    </div>
                    <button className="btn btn-primary">Create</button>
                </form>
                </div>
            </div>
        </div>

    );
}

export default NewManufacturerForm;