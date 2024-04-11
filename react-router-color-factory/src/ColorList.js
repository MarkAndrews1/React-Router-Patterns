import React from "react";
import { Link } from 'react-router-dom';

import './ColorList.css'

function ColorList({colors}){
    return(
        <div>
            <div className="ColorList-add-color-div">
                <h1>Welcome to the Color Factory</h1>  
                <h2><Link to='/colors/new' className="ColorList-add-color-btn">Add New Color!</Link></h2>
            </div> 
            <div className="ColorList-colors">
            {
            colors.map(color => (
                <div key={color.name}>
                    <Link to={`/colors/${color.name.toLowerCase()}` } className="ColorList-color"><h3>{color.name}</h3></Link>
                </div>
            ))
            }   
            </div>
        </div>
    )
}

export default ColorList