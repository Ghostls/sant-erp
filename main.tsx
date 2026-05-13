import React from 'react';
import ReactDOM from 'react-dom/client';
import SantERPDashboard from './src/SantERPDashboard'; // <--- Punto de atención

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SantERPDashboard />
  </React.StrictMode>
);