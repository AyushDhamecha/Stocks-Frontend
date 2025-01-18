import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

// export { default as Login } from './pages/Login';
// export { default as Signup } from './pages/Signup';
import "./pages/index"

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HomePage from './landing_page/home/HomePage';
import Aboutpage from './landing_page/about/AboutPage';
import Productpage from './landing_page/products/ProductPage';
import Pricingpage from './landing_page/pricing/PricingPage';
import Supportpage from './landing_page/support/SupportPage';
import Notfound from './landing_page/Notfound';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/product" element={<Productpage />} />
      <Route path="/pricing" element={<Pricingpage />} />
      <Route path="/support" element={<Supportpage />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
