import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import NewManufacturerForm from './NewManufacturerForm';
import ManufacturersList from './ManufacturersList';
import { useState } from 'react';




function App() {
  const [manufacturers, setManufacturers] = useState([]);


  const getManufacturers = async () => {
    const url = 'http://localhost:8100/api/manufacturers/';
    const response = await fetch(url);

    if (response.ok){
      const data = await response.json();
      const manufacturers = data.manufacturers;
      setManufacturers(manufacturers)
    }
  }

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
            <Route index element={<ManufacturersList manufacturers={manufacturers}/>}/>
            <Route path='new' element={<NewManufacturerForm manufacturers={manufacturers} getManufacturers={getManufacturers} />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
