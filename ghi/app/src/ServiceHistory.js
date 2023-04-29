import { useState, useEffect } from "react";

function ServiceHistory({appointments, getAppointments, setAppointments}){
    const [vinSearch, setVinSearch] =useState('');

    const handleVinSearchChange = (event) => {
        const value = event.target.value;
        setVinSearch(value.toUpperCase());
        getAppointments();
        setAppointments(appointments);
    }

    const handleVinSearch = (event) => {
        event.preventDefault();
        setAppointments(appointments);
        const filtered = appointments.filter((appointments) =>
            appointments.vin === (vinSearch)
        );
        setAppointments(filtered);
    }
    useEffect(() => {
        getAppointments();
    }, []);

    return (
        <>
        <h1 className="mb-3 mt-3">Appointments</h1>
        <form onSubmit={handleVinSearch} id="create-appointment-form">
            <div className="form-floating mb-3">
                <input onChange={handleVinSearchChange} placeholder="Seach VIN" required type="text" name = "searchVin" id="searchVin" className="form-control" value={vinSearch}/>
                <label htmlFor="searchVin">Search VIN</label>
            </div>
            <button className="btn btn-secondary">Search</button>
        </form>
        <table className="table table-striped">
        <thead>
          <tr>
            <th>VIN</th>
            <th>VIP</th>
            <th>Customer</th>
            <th>Date & Time</th>
            <th>Technician</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => {
                let status;
                let vipStatus;
                if (appointment.VIP === true){
                    vipStatus = <span style={{color: "green"}}>&#10003;</span>;
                }else{
                    vipStatus = <span style={{color: "red"}}>&#10007;</span>;
                }
                if (appointment.completed === true){
                    status = "Completed"
                }else if( appointment.canceled === true){
                    status = "Canceled"
                }else{
                    status = "Pending"
                }
                return (
                <tr key={appointment.id}>
                    <td>{ appointment.vin }</td>
                    <td>{ vipStatus }</td>
                    <td>{ appointment.customer_name }</td>
                    <td>{ new Date(appointment.date_time).toLocaleDateString("en-US")} at { new Date(appointment.date_time).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                        }) }</td>
                    <td>{ appointment.technician.last_name }, { appointment.technician.first_name }</td>
                    <td>{ appointment.description }</td>
                    <td>{ status }</td>
                </tr>
                );
            })}

        </tbody>
      </table>
        </>
    )

};

export default ServiceHistory;