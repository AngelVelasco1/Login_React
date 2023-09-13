import React from 'react'
import ReactDOM from 'react-dom/client';
import { Router } from './Router';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
