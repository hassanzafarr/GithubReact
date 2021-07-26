import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './hello';
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from './components/LoginForm'




ReactDOM.render(
  <React.StrictMode>
     <Header/> 

    <App /> 

  </React.StrictMode>,
  document.getElementById('root')
);


