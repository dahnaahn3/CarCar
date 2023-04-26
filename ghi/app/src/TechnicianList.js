import { useEffect } from "react";

function TechnicianList({technicians, getTechnicians}){
  useEffect(() => {
    getTechnicians();
  }, []);
    return (
        <>
        <h1 className="mb-3 mt-3">Technicians</h1>
        <table className="table table-striped">
        <thead>
          <tr>
            <th>Technician</th>
            <th>Employee Number</th>
          </tr>
        </thead>
        <tbody>
          {technicians.map(technician => {
            return (
              <tr key={technician.employee_number}>
                <td>{ technician.last_name }, { technician.first_name }</td>
                <td>{ technician.employee_number }</td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </>
    )
}

export default TechnicianList;