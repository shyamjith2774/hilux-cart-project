// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'


    // src/main.jsx
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App';
    import './index.css'
    import { BrowserRouter } from 'react-router-dom';
    import ShopContextProvider from './context/ShopContext';

    ReactDOM.createRoot(document.getElementById('root')).render(
      
        <BrowserRouter>
         <ShopContextProvider>
           <App />
         </ShopContextProvider>
         
        </BrowserRouter>
    );


