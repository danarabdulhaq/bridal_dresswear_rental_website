
import React, { useState} from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Services from './components/Pages/Servess/Service';
import {  Route, Routes } from 'react-router-dom';
import Login,{loginData} from './components/Pages/LoginPage';
import Register from './components/Pages/RegisterPage';
import Contact from './components/Pages/ContactUs';
//import About from './components/Pages/Aboutus'
import DisplayDresses from './components/PageDresses/DisplayDresses';
import Admin from './components/Pages/AdminLog';
import DisplayFlowerss from './components/FlowersForBridel/DisplayFlowerss';
import DisplayCode from './components/Accessoriss/DisplayCode';




function App() {

const [login,setLogin]=useState(false);
if(document.getElementById('loginEmail')==="abc@gmail.com"&& document.getElementById('loginPassword')==="12345")
{
setLogin(true)
}

  
  return (
    <div className='App'>
      
      {login ? (
<div className="loader-container">
<Admin/>
</div>
) : (
  <div className="main-content">
     
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/DisplayDress" element={<DisplayDresses/>}/>
          <Route path="/Displayaccessories" element={<DisplayCode />}/>
          <Route path="/DisplayFlower" element={<DisplayFlowerss/>}  />
          <Route path="/Admin" element={<Admin/>}  />
      </Routes>
      <Footer/>
</div>)}
</div>
  );
}
export default App;

