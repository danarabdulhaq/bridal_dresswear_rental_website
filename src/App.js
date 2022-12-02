
import './App.css';

import React from 'react';
import Footer from './components/footer';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import ContactUs from './components/pages/ContactUs';
import Services from './components/pages/Services';
import AboutUs from './components/pages/AboutUs';
import {  Route, Routes } from 'react-router-dom';
import Login from './components/pages/LoginPage';
import Register from './components/pages/RegisterPage';



import './App.css';
import Design from './components/Design'
import Card from './components/card/Card'
 function App() {
  return (

    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />

      </Routes>
      <Footer/>

  );

}


 
export default App;