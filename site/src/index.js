import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer, toast } from 'react-toastify';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import Routes from './routes'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <Routes/>
  </React.StrictMode>
);

