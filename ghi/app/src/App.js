import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import NewManufacturerForm from './NewManufacturerForm';
import ManufacturersList from './ManufacturersList';
import { useState, useEffect } from 'react';
import VehicleModelForm from './VehicleModelForm';
import VehicleModels from './VehicleModels';
import NewAutomobileForm from './NewAutomobileForm';
import AutomobileList from './AutomobilesList';

function App() {
  const [manufacturers, setManufacturers] = useState([]);
  const [automobiles, setAutomobiles] = useState([]);

  const getManufacturers = async () => {
    const url = 'http://localhost:8100/api/manufacturers/';
    const response = await fetch(url);
    if (response.ok){
      const data = await response.json();
      const manufacturers = data.manufacturers;
      setManufacturers(manufacturers)
    }
  }

  const getAutomobiles = async () => {
    const url = 'http://localhost:8100/api/automobiles/';
    const response = await fetch(url);
    if (response.ok){
      const data = await response.json();
      const automobiles = data.autos;
      setAutomobiles(automobiles)
    }
  }


  useEffect(() => {
    getAutomobiles();
    getManufacturers();
  }, []);

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
          <Route path="automobiles">
            <Route index element={<AutomobileList automobiles={automobiles}/>}/>
            <Route path='new' element={<NewAutomobileForm automobiles={automobiles} getAutomobiles={getAutomobiles} />} />
          </Route>

          <Route path="models/">
            <Route path="" element={<VehicleModels />} />
            <Route path="create" element={<VehicleModelForm />} />
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;