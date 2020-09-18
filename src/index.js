import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import {Provider} from "react-redux"
import Store from "./store"
ReactDOM.render(
  <React.StrictMode>
    <Provider store ={Store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


