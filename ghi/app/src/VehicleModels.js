import React, { useState, useEffect } from 'react'

function VehicleModels(){
    const[models, setModels] = useState([]);
    const fetchData = async () => {
        const url = 'http://localhost:8100/api/models/'
        const response = await fetch(url)
        if(response.ok){
            const data = await response.json();
            setModels(data.models)
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Manufacturer</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
            {models.map((model) =>
                <tr key={model.id}>
                    <td>{model.name}</td>
                    <td>{model.manufacturer.name}</td>
                    <td> <img src={model.picture_url} alt={model.name} className="img-fluid w-100 h-100" style={{ maxWidth: '200px', maxHeight: '150px' }}/> </td>
                </tr>
            )}
                </tbody>
            </table>
        </div>
    )
}

export default VehicleModels
