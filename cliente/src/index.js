import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css'
import './assets/normalize.css'
import App from './App'
import store from './redux/Store';


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store = {store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>

);