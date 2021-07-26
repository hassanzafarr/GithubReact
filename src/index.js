import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './hello';
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
  <React.StrictMode>
     <Header/> 
  </React.StrictMode>,
  document.getElementById('root')
);


