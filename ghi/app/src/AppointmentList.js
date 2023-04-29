import { useEffect } from "react";

function AppointmentList({appointments, getAppointments}){

    const cancelAppointment = async (appointment) => {
        const url = `http://localhost:8080/api/appointments/${appointment.id}/cancel`
        const fetchConfig = {
            method: 'PUT',
            body: JSON.stringify({ "canceled": true}),
            headers: {
                "Content-type": "application/json"
            }
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok){
            getAppointments()
        }
    }

    const completeAppointment = async (appointment) => {
        const url = `http://localhost:8080/api/appointments/${appointment.id}/finish`
        const fetchConfig = {
            method: 'PUT',
            body: JSON.stringify({ "completed": true}),
            headers: {
                "Content-type": "application/json"
            }
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok){
            getAppointments();
        }
    }
    
    useEffect(() => {
        getAppointments();
    }, []);
    return (
        <>
        <h1 className="mb-3 mt-3"> Upcoming Appointments</h1>
        <table className="table table-striped">
        <thead>
          <tr>
            <th>VIN</th>
            <th>VIP</th>
            <th>Customer</th>
            <th>Date & Time</th>
            <th>Technician</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => {
            if (appointment.completed === false && appointment.canceled === false){
                let vipStatus;
                if(appointment.VIP === true){
                    vipStatus = <span style={{color: "green"}}>&#10003;</span>;
                }else{
                    vipStatus = <span style={{color: "red"}}>&#10007;</span>;
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
                    <td>
                        <button id={ appointment.id } onClick={() => cancelAppointment(appointment)} 
                            type="button" className="btn btn-danger" > Cancel
                        </button>
                    </td>
                    <td>
                        <button id={ appointment.id } onClick={() => completeAppointment(appointment)} 
                            type="button" className="btn btn-success" > Complete
                        </button>
                    </td>
                </tr>
                );
                }
            })}

        </tbody>
      </table>
        </>
    )
}

export default AppointmentList;