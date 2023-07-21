import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js'
import './css/main.css'

document.body.innerHTML = '<div id="root"></div>';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)