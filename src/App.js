
import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader/Preloader';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import {  Route, Routes } from 'react-router-dom';
import Login from './components/Pages/LoginPage';
import Register from './components/Pages/RegisterPage';
import Contact from './components/Pages/ContactUs';

import CardDetails from './components/CardDetails/CardDetails';
import contents from './components/CardDetails/contents'


import About from './components/Pages/Aboutuspage'
import DisplayDress from './components/DisplayDress';
import Displayaccessories from './components/Accessoris/Displayaccessories';
import DisplayFlower from './components/Flower/DisplayFlower'


 function App() {
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
          <Route path="/AboutUs" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/DisplayDress" element={<DisplayDress/>}/>
          <Route path="/Displayaccessories" element={<Displayaccessories />}/>
          <Route path="/DisplayFlower" element={<DisplayFlower/>}  />
      </Routes>
      <Footer/>


      <div className='App'>
                {contents.map(contents => (
                    <CardDetails 
                       
                        img={contents.img}
                        title={contents.title}
                        descri={contents.descri}
                        size={contents.size}
                        len={contents.len}
                        wiedth={contents.wiedth}
                        shou={contents.shou}
                        bus={contents.bus}
                        color={contents.color}

                    />
                ))}
            </div>
      

</div>)}
</div>
  );
}
export default App;