import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(<h1>Hello World!!!</h1>,document.getElementById('root'));
ReactDOM.render(
  <>
    <h1>Hello World!!</h1>
    <input type='text' name='FirstName' contenteditable='' dir='ltr'/><br/><br/>
    <App />
    </>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
