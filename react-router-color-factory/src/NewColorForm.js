import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

import { Navigate } from 'react-router-dom';

import './NewColorForm.css'

const NewColorForm = ({addColor}) => {

    const INITIAL_STATE = {
        name: '',
        hexCode: '#000000'
    }

    const [formData, setFormData] = useState(INITIAL_STATE)
    const {name, hexCode} = formData
    const [redirectToColors, setRedirectToColors] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        addColor({ id: uuid(), ...formData });
        setFormData(INITIAL_STATE);
        setRedirectToColors(true);
    };

    if (redirectToColors) {
        return <Navigate to="/colors" />;
    }
    return(
        <div className="NewColorForm-div">
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Please enter a Name: </label>
                <input
                id="name" 
                type="text"
                name="name"
                value={name}
                placeholder="Enter Task Here"
                onChange={handleChange}
                required
                 />
                 <br/>
                <label htmlFor="hexCode">Please enter a Color: </label>
                <input
                id="hexCode" 
                type="color"
                name="hexCode"
                value={hexCode}
                onChange={handleChange}
                required
                 />
                 <br/>
                 <button className="NCF-btn">Make a Color!</button>
            </form>
        </div>
    )

}

export default NewColorForm