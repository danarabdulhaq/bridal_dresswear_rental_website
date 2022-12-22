
import React, { useState} from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Services from './components/Pages/Servess/Service';
import {  Route, Routes } from 'react-router-dom';
import Login from './components/Pages/LoginPage';
import Register from './components/Pages/RegisterPage';
import Contact from './components/Pages/ContactUs';
import About from './components/Pages/Aboutus'
import DisplayDresses from './components/PageDresses/DisplayDresses';
import Admin from './components/Pages/AdminLog';
import DisplayFlowerss from './components/FlowersForBridel/DisplayFlowerss';
import DisplayCode from './components/Accessoriss/DisplayCode';
import LoginData from './components/Data/LoginData';




function App() {
const data=useState(LoginData)
const [login,setLogin]=useState(false);
data.map((info)=>{
  if (info.s) {
  }
})
  
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
          <Route path="/AboutUs" element={<About />} />
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

