import React, { useEffect, useState } from 'react';

function SalesHistory() {
  const [sales, setSales] = useState([]);
  const [selectedSalesperson, setSelectedSalesperson] = useState('');

  const fetchData = async () => {
    const url = 'http://localhost:8090/api/sales/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setSales(data.sales);
    }
  };

  const handleSubmit = (event) =>{
    setSelectedSalesperson(event.target.value)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <select onChange={handleSubmit}>
        <option>choose a sales person</option>
        {sales.map((sale) => {
          return (
            <option key={sale.id} value={sale.salesperson.employee_id}>
              {sale.salesperson.first_name} {sale.salesperson.last_name}
            </option>
          );
        })}
      </select>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Salesperson</th>
            <th>Customer</th>
            <th>VIN</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sales.filter((sale) => sale.salesperson.employee_id === selectedSalesperson).map((sale) => {
              return (
                <tr key={sale.id}>
                  <td>
                    {sale.salesperson.first_name} {sale.salesperson.last_name}
                  </td>
                  <td>
                    {sale.customer.first_name} {sale.customer.last_name}
                  </td>
                  <td>{sale.automobile.vin}</td>
                  <td>{sale.price}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default SalesHistory;
