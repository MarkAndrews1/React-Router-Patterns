import React from 'react';
import { Link } from 'react-router-dom';
import './DogList.css'

function DogList({dogs}) {
    return(
        <div>
            <h1>Welcome to our dog finder.</h1>

            {
            dogs.map(dog => (
                <div key={dog.name.toLowerCase()}>
                    <img src={`/${dog.src}.jpg`} alt={dog.name} className='DogList-img'/>
                    <h3>
                        <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
                    </h3>
                </div>
            ))
            }
        </div>
    )
}

export default DogList