import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 import { BrowserRouter } from 'react-router-dom';
import StateProvider from './timer/StateProvider';
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <StateProvider>
      {console.log(process.env)}
      <App />
    </StateProvider> 
  </BrowserRouter>
);

 