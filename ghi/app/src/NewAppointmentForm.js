import React, { useState } from "react";

function NewAppointmentForm({technicians, getAppointments}){

    const [vin, setVin] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [description, setDescription] = useState('');
    const [technician, setTechnician] = useState('')

    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value.toUpperCase());
    }

    const handleCustomerNameChange = (event) => {
        const value = event.target.value;
        setCustomerName(value);
    }

    const handleDateTimeChange = (event) => {
        const value = event.target.value;
        setDateTime(value);
    }

    const handleDescriptionChange = (event) => {
        const value = event.target.value;
        setDescription(value);
    }

    const handleTechnicianChange = (event) => {
        const value = event.target.value;
        setTechnician(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.vin = vin;
        data.customer_name = customerName;
        data.date_time = dateTime;
        data.description = description;
        data.technician = parseInt(technician); //this is where things will break. Calling it.

        const url = 'http://localhost:8080/api/appointments/';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok){
            setVin('');
            setCustomerName('');
            setDateTime('');
            setDescription('');
            setTechnician('');

        }
    }
    return(
        <div className="row">
            <div className="offset-3 col-6" >
                <div className="shadow p-4 mt-4">
                <h1>Create a new appointment</h1>
                <form onSubmit={handleSubmit} id="create-appointment-form">
                    <div className="form-floating mb-3">
                        <input onChange={handleVinChange} placeholder="VIN" required type="text" name = "vin" id="vin" className="form-control" value={vin}/>
                        <label htmlFor="vin">VIN</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleCustomerNameChange} placeholder="Customer_Name" required type="text" name='customer_name' id="customer_name" className="form-control" value={customerName} />
                        <label htmlFor="customer_name">Customer Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleDateTimeChange} placeholder="Date & Time" required type="datetime-local" name="date_time" id="date_time" className="form-control" value={dateTime} />
                        <label htmlFor="date_time">Date & Time</label>
                    </div>
                    <div className="form-floating mb-3">
                    <input onChange={handleDescriptionChange} placeholder="description" required type="text" name='description' id="description" className="form-control" value={description} />
                        <label htmlFor="description">Description</label>                        
                    </div>
                    <div>
                        <select onChange={handleTechnicianChange} required name="technician" className="form-select">
                        <option value={""}>Choose a Technician</option>
                            {technicians.map(technician => {
                                return (
                                    <option key={technician.id} value={technician.employee_number}>
                                        {technician.last_name}, {technician.first_name}
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

export default NewAppointmentForm;