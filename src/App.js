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




    </>
  );

}
 
export default App;



////////////////////////////////////////////////////////
/*function App() {
  return (
<BrowserRouter>
 <Routes>

          <Route path='/' element={<Design/>}/>
          <Route index path='/pages/About' element ={<Design/>}/>
          <Route path='/' element={<Contact/>}/>
          <Route index path='/pages/About' element ={<Contact/>}/>

 </Routes>
</BrowserRouter>

);
}*/