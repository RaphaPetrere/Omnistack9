import React from 'react'; //useState serve para a criação de estados na aplicação
import './App.css';

import logo from './assets/logo.svg';

import Routes from './routes';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnc"/>
      <div className="content">
        <Routes />
      </div>
    </div>
    // utiliza className pq class é uma palavra reservada em js
  );
}

//adicionamos a biblioteca axios para as chamadas à a API
export default App;
