
import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader/Preloader';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Services from './components/Pages/Servess/Service';
import {  Route, Routes } from 'react-router-dom';
import Login from './components/Pages/LoginPage';
import Register from './components/Pages/RegisterPage';
import Contact from './components/Pages/ContactUs';
//import About from './components/Pages/Aboutus'
import DisplayDresses from './components/PageDresses/DisplayDresses';
import Displayaccessories from './components/Accessoris/Displayaccessories';
import DisplayFlower from './components/Flower/DisplayFlower'
import Admin from './components/Pages/AdminLog';

import Calendaer from './components/Calendar/Calendar.js'

 function App() {
  <Services/>
   const [loading, setLoading] = useState(false);
   useEffect(() => {
     setLoading(true);
     setTimeout(() => {
       setLoading(false);
     }, 5300);
   }, []);
   return (
    <div className='App'>
      {loading ? (
 <div className="loader-container">
 <Preloader />
 </div>
 ) : (
   <div className="main-content">
     <Navbar/>
       <Routes>
         <Route path="/" element={<Home />}/>
           <Route path="/ContactUs" element={<Contact />} />
           <Route path="/Services" element={<Services />} />
           {/* <Route path="/AboutUs" element={<About  />} /> */}
          <Route path="/Login" element={<Login />} />
           <Route path="/Register" element={<Register />} />
           <Route path="/DisplayDress" element={<DisplayDresses/>}/>
           <Route path="/Displayaccessories" element={<Displayaccessories />}/>
           <Route path="/DisplayFlower" element={<DisplayFlower/>}  />
          <Route path="/Admin" element={<Admin/>}  />
          <Route path="/Calendaer" element={<Calendaer/>}  />
          

          
          
       </Routes>
     <Footer/>


 </div>)}
 </div>
 );
}
export default App;