import React, { useEffect, useState } from "react";

function NewTechnicianForm({technicians, getTechnicians}){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [employeeNumber, setEmployeeNumber] = useState('')

    const handleFirstNameChange = (event) =>{
        const value = event.target.value;
        setFirstName(value);
    }
    const handleLastNameChange = (event) =>{
        const value = event.target.value;
        setLastName(value);
    }
    
    const handleEmployeeNumberChange = (event) =>{
        const value = event.target.value;
        setEmployeeNumber(value);
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.first_name = firstName;
        data.last_name = lastName;
        data.employee_number = employeeNumber;

        const url = 'http://localhost:8080/api/technicians/';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok){
            setFirstName('');
            setLastName('');
            setEmployeeNumber('');
        };
    };

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a new Technician</h1>
                    <form onSubmit={handleSubmit} id="create-appointment-form">
                    <div className="form-floating mb-3">
                        <input onChange={handleFirstNameChange} placeholder="First Name" required type="text" name="first_name" id="first_name" className="form-control" value={firstName} />
                        <label htmlFor="first_name">First Name...</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleLastNameChange} placeholder="Last Name" required type="text" name="last_name" id="last_name" className="form-control" value={lastName} />
                        <label htmlFor="last_name">Last Name...</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleEmployeeNumberChange} placeholder="Employee Number" required type="text" name="employee_number" id="employee_number" className="form-control" value={employeeNumber} />
                        <label htmlFor="employee_number">Employee Number...</label>
                    </div>
                    <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>

    );


};

export default NewTechnicianForm;