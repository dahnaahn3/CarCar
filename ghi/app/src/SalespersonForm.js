import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function SalespersonForm(){
    const[firstName, setFirstName]=useState('')
    const[lastName, setLastName] = useState('')
    const[employeeID, setEmployeeID]= useState('')



    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value)
    }
    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLastName(value)
    }
    const handleEmployeeIDChange = (event) => {
        const value = event.target.value;
        setEmployeeID(value)
    }

    const navigate = useNavigate()
    const handleSubmit = async(event) => {
        event.preventDefault();
        const data={
            first_name: firstName,
            last_name: lastName,
            employee_id: employeeID
        }

        const salespersonURL = 'http://localhost:8090/api/salespeople/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        };
        const response = await fetch(salespersonURL, fetchConfig)
        if(response.ok){
            const newSalesperson = await response.json();
            setFirstName('')
            setLastName('')
            setEmployeeID('')
            navigate('/salesperson')
        }
    }


    return(
        <div className='row' style={{width:"50em"}}>
    <div className="offset-3" style={{textAlign: "center"}}>
            <div className='shadow p-4 mt-4'>
            <h1>Create a new salesperson</h1>
                <form onSubmit={handleSubmit} id="create-salesperson-form">

                    <div className="form-floating mb-3">
                        <input value={firstName} onChange={handleFirstNameChange} placeholder='First name' required type="text" name="firstname" id="firstname" className="form-control"/>
                        <label htmlFor="firstname"> First name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input value={lastName} onChange={handleLastNameChange} placeholder='Last name' required type="text" name="lastname" id="lastname" className="form-control"/>
                        <label htmlFor="lastname"> Last name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input value={employeeID} onChange={handleEmployeeIDChange} placeholder='Employee ID' required type="text" name="employeeID" id="employeeID" className="form-control"/>
                        <label htmlFor="employeeID"> Employee ID</label>
                    </div>

                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default SalespersonForm
