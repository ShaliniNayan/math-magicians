import './App.css';
import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, Link,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import Home from './components/Homepage';

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ marginBottom: '20px' }}>
          <ul
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              listStyleType: 'none',
            }}
          >
            <li style={{ marginRight: '10px' }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>
                Home
              </Link>
            </li>
            <li style={{ marginRight: '10px' }}>
              <Link
                to="/calculator"
                style={{ textDecoration: 'none', color: 'blue' }}
              >
                Calculator
              </Link>
            </li>
            <li>
              <Link
                to="/quotes"
                style={{ textDecoration: 'none', color: 'blue' }}
              >
                Quotes
              </Link>
            </li>
          </ul>
        </nav>

        <h1 style={{ textAlign: 'flex-start', marginBottom: '60px', marginRight: '100px' }}>
          Math Magicians
        </h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
