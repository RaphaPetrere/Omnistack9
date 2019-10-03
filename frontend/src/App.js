import React from 'react';
import './App.css';

import logo from './assets/logo.svg';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnc"/>
      <div className="content">
        <p>
          Ofereça <strong>Spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
        </p>

        <form>
          <label htmlFor="email">E-MAIL *</label>
          <input type="email" id="email" placeholder="Seu melhor e-mail"></input>
          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
    // utiliza className pq class é uma palavra reservada em js
  );
}

//32:30 aula 3
export default App;
