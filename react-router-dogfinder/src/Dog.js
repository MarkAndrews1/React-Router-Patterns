import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import './Dog.css'

function Dog({dogs}) {
    const { name } = useParams();

    try{
        const dog = dogs.find(
            d => d.name.toLowerCase() === name.toLowerCase()
        )

    return(
            <div className='Dog-div'>
                <img src={`/${dog.src}.jpg`} alt={dog.name} className='Dog-img'/>
                <h1>{dog.name}</h1>
                <h2>{dog.age} Years Old</h2>

                <h3>Facts:</h3>
                <ul>
                    {dog.facts.map((fact, i) => (
                    <li className='Dog-fact' key={i}>{fact}</li>
                    ))}
                </ul>

                <Link to='/dogs'>Go Back</Link>

            </div>
        )  
    }catch(err){
        console.error('Error:', err)
        return <Navigate to='/dogs' />
    }

}

export default Dog