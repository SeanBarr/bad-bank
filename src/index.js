import React from 'react';
import ReactDOM from 'react-dom';
import { ContextProvider } from "./context/Context";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './App.css'
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
    <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();