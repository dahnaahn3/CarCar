import React, { useState } from "react";

function NewManufacturerForm({manufacturers, getManufacturers}){
    const [name, setName] = useState('');


    const handleNameChange = (event) => {
        const value = event.taget.value;
        setName(value);
    }

    return(
        <h1>this is a test form</h1>
    );
}

export default NewManufacturerForm;