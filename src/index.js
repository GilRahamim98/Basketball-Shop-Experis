import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BasketNavBar from './Components/Nav&Footer/BasketNavBar';
import Home from './Components/Home';
import About from './Components/About';
import LoginPage from './Components/LoginPage';
import Cart from './Components/Cart';
import MyAccount from './Components/MyAccount';
import ProductDetails from './Components/ProductDetails';
import RegisterPage from './Components/RegisterPage';
import Category from './Components/Category';
import ContactUs from './Components/ContactUs';
import Wishlist from './Components/Wishlist';
import EditMyProfile from './Components/EditMyProfile';
import MyOrders from './Components/MyOrders';
import Order from './Components/Order';
import Search from './Components/Search/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    {/* <App /> */}
    <Routes>
      <Route path="/" element={<BasketNavBar />}>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Category/:id" element={<Category />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/MyProfile" element={<MyAccount />} />
        <Route path="/Products/:id" element={<ProductDetails />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/MyProfile/editMyAccount" element={<EditMyProfile />} />
        <Route path="/MyProfile/orders" element={<MyOrders />} />
        <Route path="/MyProfile/orders/:id" element={<Order />} />
        <Route path="/search" element={<Search />} />



      </Route >



    </Routes>


  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
