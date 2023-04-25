import React, { useState, useEffect } from 'react'

function Customers(){

    const [customers, setCustomers] = useState([]);
    const fetchData = async() =>{
        const url= 'http://localhost:8090/api/customers/'
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            setCustomers(data.customer)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <table className="table table-striped">
            <thead>
                <tr>
                   <th>first name</th>
                   <th>last name</th>
                   <th>phone number</th>
                   <th>address</th>
                </tr>
            </thead>
            <tbody>
                {customers.map(c =>
                   {
                    return (
                        <tr key={c.id}>
                            <td>{c.first_name}</td>
                            <td>{c.last_name}</td>
                            <td>{c.phone_number}</td>
                            <td>{c.address}</td>
                        </tr>
                    )
                   })}
            </tbody>
        </table>
    )
}

export default Customers
