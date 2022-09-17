import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './paginas/home';
import LoginADM from './paginas/login'
import Barra from '../src/componentes/barra'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginADM/>
  </React.StrictMode>
);

