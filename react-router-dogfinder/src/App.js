import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios'
import './App.css';

import DogList from './DogList';
import Dog from './Dog';
import NavBar from './NavBar';

function App() {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    async function getDogs() {
      try{
        const res = await axios.get('/db.json')
        setDogs(res.data.dogs)
      } catch(err){
        console.error('Error fetching data:', err)
      }
    }

    getDogs()
  }, [])


  return (
    <div className='App'>
      <NavBar dogs={dogs} />
      <Routes>
        <Route path='/dogs' element={<DogList dogs={dogs}/>} />
        <Route path='/dogs/:name' element={<Dog dogs={dogs}/>} />
        <Route path='*' element={<Navigate to='/dogs' />} />
      </Routes>
    </div>

  );
}

export default App;
