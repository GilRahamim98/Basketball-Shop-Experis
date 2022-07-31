import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BasketNavBar from './Components/BasketNavBar';
import Home from './Components/Home';
import About from './Components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    {/* <App /> */}
    <Routes>
      <Route path="/" element={<BasketNavBar />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />

      </Route>

    </Routes>


  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
