import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Tablas from './Ariana';
import Holaa from './Abigail';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Holaa danza="ballet" pais="alemania" representante="ballet del sol" dibujos="descarga.jpg" ></Holaa>
    <Holaa danza="tango" pais="alemania" representante="ballet del sol" dibujos="descarga1.jpg" ></Holaa>
    <Holaa danza="caporal" pais="alemania" representante="ballet del sol" dibujos="descarga2.jpg" ></Holaa>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
