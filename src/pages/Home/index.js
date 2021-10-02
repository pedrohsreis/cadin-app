import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <img src={require('../../assets/img/cadin-logo.png').default} />
        <p>
          Welcome to the Cadin mapping app! Wish us good luck.
        </p>
        <p>
          <Link to={'/ww'}>Open our interactive 3D Map</Link>
        </p>
        <p>
          By Afonso, Amanda, Pedro and Vitor.
        </p>
      </header>
    </div>
  );
}

export default App;
