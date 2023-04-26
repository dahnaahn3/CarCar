import React, { useEffect, useState } from 'react'

function Sales(){
    const [sales, setSales] = useState([]);
    const fetchData = async() => {
        const url = 'http://localhost:8090/api/sales/'
        const response = await fetch(url)
        if(response.ok){
            const data=await response.json()
            setSales(data.sales)
            console.log(data.sales)
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return(
    <>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Salesperson employee ID</th>
                    <th>Salesperson Name</th>
                    <th>Customer</th>
                    <th>VIN</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {sales.map(sale =>
                    {
                        return(
                            <tr key={sale.id}>
                                <td>{sale.salesperson.employee_id}</td>
                                <td>{sale.salesperson.first_name} {sale.salesperson.last_name}</td>
                                <td>{sale.customer.first_name} {sale.customer.last_name} </td>
                                <td>{sale.automobile.vin}</td>
                                <td>${sale.price}.00</td>
                            </tr>
                        )
                    })}
            </tbody>
        </table>

    </>
    )
}

export default Sales
