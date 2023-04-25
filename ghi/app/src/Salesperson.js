import React, { useState, useEffect } from 'react'

function Salesperson(){
    const [salesperson, setSalesperson] = useState([]);
    const fetchData = async() =>{
        const url= 'http://localhost:8090/api/salespeople/'
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            setSalesperson(data.salesperson)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <table className="table table-striped">
            <thead>
                <tr>
                   <th>employee ID</th>
                   <th>first name</th>
                   <th>last name</th>
                </tr>
            </thead>
            <tbody>
                {salesperson.map(s =>
                   {
                    return (
                        <tr key={s.id}>
                            <td>{s.employee_id}</td>
                            <td>{s.first_name}</td>
                            <td>{s.last_name}</td>
                        </tr>
                    )
                   })}
            </tbody>
        </table>
    )
}

export default Salesperson
