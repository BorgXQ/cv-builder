import React from 'react';
import { createRoot } from 'react-dom/client';

document.body.innerHTML = '<div id="root"></div>';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)