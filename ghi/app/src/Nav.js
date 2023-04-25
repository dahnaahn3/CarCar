import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <NavLink className="navbar-brand" to="/models">Models</NavLink>
        <NavLink className="navbar-brand" to="/models/create">Create a Model</NavLink>
        <NavLink className="navbar-brand" aria-current="page" to="/manufacturers/">Manufacturer</NavLink>
        <NavLink className="navbar-brand" aria-current="page" to="/manufacturers/new/">Create a Manufacturer</NavLink>
        <NavLink className="navbar-brand" aria-current="page" to="/automobiles/">Automobiles</NavLink>
        <NavLink className="navbar-brand" aria-current="page" to="/automobiles/new/">Create an Automobile</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  )
}

export default Nav;
