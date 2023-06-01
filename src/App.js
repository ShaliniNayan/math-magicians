import './App.css';
import React from 'react';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

function App() {
  return (
    <>
      <h1>Math Magicians</h1>
      <div className="App">
        <Quotes />
        <Calculator />
      </div>
    </>
  );
}

export default App;
