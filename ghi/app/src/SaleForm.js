import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function SaleForm(){
    const[auto, setAuto] = useState([])
    const[salesperson, setSalesperson] = useState([])
    const[customer, setCustomer] = useState([])

    const[vin, setVin] = useState('')
    const[newSalesperson, setNewSalesperson] = useState('')
    const[newCustomer, setNewCustomer] = useState('')
    const[price, setPrice] = useState('')


    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value)
    }
    const handleNewSalespersonChange = (event) => {
        const value = event.target.value;
        setNewSalesperson(value)
    }
    const handleNewCustomerChange = (event) => {
        const value = event.target.value;
        setNewCustomer(value)
    }
    const handlePriceChange = (event) => {
        const value = event.target.value;
        setPrice(value)
    }
    const navigate = useNavigate()
    const handleSubmit = async(event) =>{
        event.preventDefault()
        const data = {
            vin: vin,
            salesperson: newSalesperson,
            customer: newCustomer,
            price: price
        }

        console.log('data:::::', data)

        const salesURL = 'http://localhost:8090/api/sales/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        };

        console.log('fetch config', fetchConfig)

        const response = await fetch(salesURL, fetchConfig)
        if(response.ok){
            const newSale = await response.json()

            console.log('new sale' , newSale)

            setVin('')
            setNewSalesperson('')
            setNewCustomer('')
            setPrice('')
            navigate('/sales')
        }
    }



    const fetchData = async () => {
        const autoURL = 'http://localhost:8100/api/automobiles/'
        const salespeopleURL = 'http://localhost:8090/api/salespeople/'
        const customerURL = 'http://localhost:8090/api/customers/'
        const response = await Promise.all([fetch(autoURL), fetch(salespeopleURL), fetch(customerURL)])

            const autoData = await response[0].json()
            const salespersonData = await response[1].json()
            const customerData = await response[2].json()

            setAuto(autoData.autos)
            setSalesperson(salespersonData.salesperson)
            setCustomer(customerData.customer)
    }

    useEffect(() => {
        fetchData();
    }, []);

    return(
    <div className="row" style={{width:"50em"}}>
        <div className="offset-3">
            <div className="shadow p-4 mt-4">
            <h1>Create a new sale</h1>
            <form onSubmit={handleSubmit} id="create-new-sale">

                <div className="mb-3">
                    <select onChange={handleVinChange} required name="vin" id="vin" className="form-select">
                        <option value={vin} >Choose an automobile VIN</option>
                        {auto.map(a =>{
                            return(
                                <option key={a.vin} value={a.vin}>
                                    {a.vin}
                                </option>
                            )
                        })}
                    </select>
                </div>

                <div className="mb-3">
                    <select onChange={handleNewSalespersonChange} required name="salesperson" id="salesperson" className="form-select">
                        <option value={newSalesperson} >Choose a salesperson</option>
                        {salesperson.map(s =>{
                            return(
                                <option>
                                    {s.first_name} {s.last_name}
                                </option>
                            )
                        })}
                    </select>
                </div>

                <div className="mb-3">
                    <select onChange={handleNewCustomerChange} required name="customer" id="customer" className="form-select">
                        <option value={newCustomer} >Choose a customer</option>
                        {customer.map(c =>{
                            return(
                                <option>
                                    {c.first_name} {c.last_name}
                                </option>
                            )
                        })}
                    </select>
                </div>

                <div className="form-floating mb-3">
                    <input value={price} onChange={handlePriceChange} placeholder="price" required type="number" name="price" id="price" className="form-control"/>
                    <label htmlFor="price"> price </label>
                </div>


                <button className="btn btn-primary">Create</button>

            </form>
            </div>
        </div>
    </div>
    )
}

export default SaleForm
