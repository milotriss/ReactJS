import React from 'react';
import './App.css';
import Products from './components/products/products';
import Header from './components/header/header';


function App():JSX.Element {
  return (
    <div className="App">
      <Header/>
      <Products/>
    </div>
  );
}

export default App;
