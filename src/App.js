
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
import Admin from './components/Pages/AdminLog';
import DisplayFlowerss from './components/FlowersForBridel/DisplayFlowerss';
import DisplayCode from './components/Accessoriss/DisplayCode';
import LoginData from './components/Data/LoginData';
import Fback from './components/Pages/FeedbackPage/Fback';
import Preloader from './components/Preloader/Preloader'
import Dress from './components/AdminCP/Dress'




function App() {


  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5300);
  }, []);

const [login,setLogin]=useState(false);

const[ data,setData]=useState(LoginData)
useEffect(()=> {data.map((info)=>{
    if(info.state===true&&info.access==='admin')
{setLogin(true)}
})}
  )
  return (
    
    <div className='App'>
      
  {loading ? (
<div className="loader-container">
<Preloader />
</div>
): (  login ? (
<div>
<Admin/>
</div>

):(
  <div className="main-content">
     
     <Navbar/>
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
      </Routes>
      <Footer/>
</div>))}
</div>
  );
}
export default App;

