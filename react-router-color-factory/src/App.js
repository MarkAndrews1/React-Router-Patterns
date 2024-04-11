import React, {  useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import ColorList from './ColorList';
import NewColorForm from './NewColorForm';
import ColorDetail from './ColorDetail';

function App() {

  const [colors, setColors] = useState([
    {
      "name": 'Pink',
      "hexCode": '#FFC0CB'
    },
    {
      "name": 'Dark Green',
      "hexCode": '#355E3B'
    },
    {
      "name": 'Light Blue',
      "hexCode": '#ADD8E6'
    }
  ])

  const addColor = colorObj => {
    setColors(colors => [
      ...colors,
      colorObj
    ])
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/colors' element={<ColorList colors={colors}/>} />
        <Route path='/colors/:name' element={<ColorDetail colors={colors}/>} />
        <Route path='/colors/new' element={<NewColorForm addColor={addColor }/>} />
        <Route path='*' element={<Navigate to='/colors' />} />
      </Routes>
    </div>
  );
}

export default App;
