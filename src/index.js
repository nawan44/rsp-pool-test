import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login/login';

const whatsapp = {
  fontSize: 60,
  color: '#0DB540',
  position: 'fixed',
  bottom: 20,
  right: 20
}


ReactDOM.render(
  
  <React.StrictMode >
    
{/* <Login /> */}
    <App />
    <i class='fab fa-whatsapp-square' style={whatsapp}></i>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
