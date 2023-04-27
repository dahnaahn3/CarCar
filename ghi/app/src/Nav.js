import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <div className="dropdown">
          <button className="btn btn-light dropdown-toggle me-2" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Inventory
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <NavLink className="dropdown-item" aria-current="page" to="/manufacturers/">Manufacturers</NavLink>
              <NavLink className="dropdown-item" aria-current="page" to="/manufacturers/new/">Create a Manufacturer</NavLink>
              <div className='dropdown-divider'></div>
              <NavLink className="dropdown-item" aria-current="page" to="/models/">Models</NavLink>
              <NavLink className="dropdown-item" aria-current="page" to="/models/create/">Create a Model</NavLink>
              <div className='dropdown-divider'></div>
              <NavLink className="dropdown-item" aria-current="page" to="/automobiles/">Automobiles</NavLink>
              <NavLink className="dropdown-item" aria-current="page" to="/automobiles/new/">Create an Automobile</NavLink>
            </div>
            <button className="btn btn-light dropdown-toggle me-2" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sales
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <NavLink className="dropdown-item" aria-current="page" to="/salesperson/"> Salespeople</NavLink>
              <NavLink className="dropdown-item" aria-current="page" to="/salesperson/create/"> Add a Salesperson</NavLink>
              <div className='dropdown-divider'></div>
              <NavLink className="dropdown-item" aria-current="page" to="/customers/"> Customers</NavLink>
              <NavLink className="dropdown-item" aria-current="page" to="/customers/create/"> Add a Customer</NavLink>
              <div className='dropdown-divider'></div>
              <NavLink className="dropdown-item" aria-current="page" to="/sales/"> Sales</NavLink>
              <NavLink className="dropdown-item" aria-current="page" to="/sales/create/"> Add a Sale</NavLink>
              <div className='dropdown-divider'></div>
              <NavLink className="dropdown-item" aria-current="page" to="/sales/history/"> Sales History</NavLink>
            </div>
            <button className="btn btn-light dropdown-toggle me-2" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Services
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <NavLink className="dropdown-item" aria-current="page" to="/technicians/">Technicians</NavLink>
            <NavLink className="dropdown-item" aria-current="page" to="/technicians/new/">Create a Technicians</NavLink>
            <div className='dropdown-divider'></div>
            <NavLink className="dropdown-item" aria-current="page" to="/appointments/">Appointments</NavLink>
            <NavLink className="dropdown-item" aria-current="page" to="/appointments/new/">Create an Appointment</NavLink>
            <div className='dropdown-divider'></div>
            <NavLink className="dropdown-item" aria-current="page" to="/appointments/history/">Service History</NavLink>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
