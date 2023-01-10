
import React, { useState,useEffect} from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Services from './components/Pages/Servess/Service';
import {  Route, Routes } from 'react-router-dom';
import Login from './components/Pages/LoginPage';
import Register from './components/Pages/RegisterPage';
import Contact from './components/Pages/ContactUs';
import Aboutus from './components/Pages/AboutUs'
import DisplayDresses from './components/PageDresses/DisplayDresses';
import DisplayFlowerss from './components/FlowersForBridel/DisplayFlowerss';
import DisplayCode from './components/Accessoriss/DisplayCode';
import Fback from './components/Pages/FeedbackPage/Fback';
import Preloader from './components/Preloader/Preloader'
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Admin from './components/Pages/AdminLog';
import Dress from './components/AdminCP/Dress';
import Accessoriess from './components/AdminCP/Accessoriess';
import Bouquet from './components/AdminCP/Bouquet';
import ACPRegister from './components/AdminCP/ACPRgister';



function App() {

  localStorage.setItem('adminEmail',"abc@gmail.com")
  localStorage.setItem('adminPass',"12345")
  localStorage.setItem('login',false)



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
  ):(
    <div className="main-content">
       
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="/ContactUs" element={<Contact />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/AboutUs" element={<Aboutus />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/DisplayDress" element={<DisplayDresses/>}/>
            <Route path="/Displayaccessories" element={<DisplayCode />}/>
            <Route path="/DisplayFlower" element={<DisplayFlowerss/>}  />
            <Route path="/Fback" element={<Fback/>}  />
            <Route path="/ShoppingCart" element={<ShoppingCart/>}  />
            <Route path="/Dress" element={<Dress/>} />
            <Route path="/Accessoriess" element={<Accessoriess/>} />
            <Route path="/Bouquet" element={<Bouquet/>} />
            <Route path="/ACPRegister" element={<ACPRegister/>} />
  
        </Routes>
  </div>)}
  </div>
  );
}
export default App;

