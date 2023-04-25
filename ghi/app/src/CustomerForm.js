import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CustomerForm(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')


    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value)}

    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLastName(value)}

    const handleAddressChange = (event) => {
        const value = event.target.value;
        setAddress(value)}

    const handlePhoneNumberChange = (event) => {
        const value = event.target.value;
        setPhoneNumber(value)}

    const navigate = useNavigate()
    const handleSubmit = async(event) => {
        event.preventDefault();
        const data={
            first_name:firstName,
            last_name:lastName,
            address: address,
            phone_number: phoneNumber
        }
        const customerURL = 'http://localhost:8090/api/customers/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }
        const response = await fetch(customerURL, fetchConfig)
        if(response.ok){
            const newCustomer = await response.json();
            setFirstName('')
            setLastName('')
            setAddress('')
            setPhoneNumber('')
            navigate('/customers')
        }
    }

    return(
        <div className='row' style={{width:"50em"}}>
    <div className="offset-3" style={{textAlign: "center"}}>
            <div className='shadow p-4 mt-4'>
            <h1>Create a new customer</h1>
                <form onSubmit={handleSubmit} id="create-customer-form">

                    <div className="form-floating mb-3">
                        <input value={firstName} onChange={handleFirstNameChange} placeholder='First name' required type="text" name="firstname" id="firstname" className="form-control"/>
                        <label htmlFor="firstname"> First name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input value={lastName} onChange={handleLastNameChange} placeholder='Last name' required type="text" name="lastname" id="lastname" className="form-control"/>
                        <label htmlFor="lastname"> Last name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input value={address} onChange={handleAddressChange} placeholder='Address' required type="text" name="address" id="address" className="form-control"/>
                        <label htmlFor="address"> Address</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input value={phoneNumber} onChange={handlePhoneNumberChange} placeholder='Phone number' required type="text" name="phonenumber" id="phonenumber" className="form-control"/>
                        <label htmlFor="phonenumber"> Phone number </label>
                    </div>

                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default CustomerForm
