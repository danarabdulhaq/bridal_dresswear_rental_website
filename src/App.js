import './App.css';

import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import AboutUs from './components/Pages/AboutUs';
import {  Route, Routes } from 'react-router-dom';
import Login from './components/Pages/LoginPage';
import Register from './components/Pages/RegisterPage';
import Contact from './components/Pages/ContactUs';


 function App() {
  return (

    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />

      </Routes>
      <Footer/>
</>
  );

}


 
export default App;
