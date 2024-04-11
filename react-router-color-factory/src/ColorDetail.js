import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';

import './ColorDetail.css'

function ColorDetail({colors}) {
    const { name } = useParams();

    try{
        const color = colors.find(
            c => c.name.toLowerCase() === name.toLowerCase()
        )

    return(
            <div className='Dog-div' style={{backgroundColor: color.hexCode}}>
                <h1>This is {color.name}</h1>

                <h2>Isn't it beautiful?</h2>

                <Link to='/colors' className='ColorDetail-return-btn'>Go Back</Link>
            </div>
        )  
    }catch(err){
        console.error('Error:', err)
        return <Navigate to='/colors' />
    }

}

export default ColorDetail