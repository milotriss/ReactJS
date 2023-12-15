import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/defaultLayout';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<DefaultLayout son={<p>This Home...</p>}/>}/>
        <Route path='/contact' element={<DefaultLayout son={<p>Contact here</p>}/>}/>
        <Route path='/about' element={<DefaultLayout son={<p>About here</p>}/>}/>
        <Route path='/*' element={<DefaultLayout son={<h1>Not found ... ahihi</h1>}/>}/>
      </Routes>
    </div>
  );
}

export default App;
