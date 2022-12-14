import React from 'react';
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


 function App() {
  return (

    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
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
      
 </>
  );

}


 
export default App;