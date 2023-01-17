import Form from '../Form/Form';
import React, { useEffect, useState } from 'react';
import '../Textbox/Textbox.css';
import { Link } from 'react-router-dom';
import  '../Register-btn/Register-btn.css';
import { useRef } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Admin from '../AdminPage/Admin';


const Login = ()=> { 
  
  const email=useRef()
  const password=useRef()
  const [login,setLogin]=useState(false)


const handelClick=()=>{


  if(email.current.value&&password.current.value)
  {
    if(email.current.value==localStorage.getItem("adminEmail")&&password.current.value==localStorage.getItem("adminPass"))
    {
      setLogin(true);
      console.log(email.current.value,password.current.value)
      
    }
  }
}
useEffect(()=>localStorage.setItem('login',true)) 

    
return (
  <>
   { login?
   (
    <>
    <Admin/>
   </>
   ):(

      <>
      <Navbar/>
    <div className='register' >  
   <Form text= "Login to your account"> 
   <div className="form-outline mb-4">
        <input ref={email}  type="email" id="loginEmail" className="text-input" autoComplete='off' required/>
        <label className="label" for="loginName">Email</label>
      </div>
      <div className="form-outline mb-4">
        <input ref={password}  type="password" id="loginPassword" className="text-input" autoComplete='off' required/>
        <label className="label" for="loginName">password</label>
      </div>
      <p className="mb-5 pb-lg-2" >Don't have an account? <Link to="/Register">Register here</Link></p>
      <div className="pt-1 mb-4">
        <button className="btn" type="button"onClick={handelClick} id="registerBtn">Login</button>
      </div>
      
    </Form>

    </div>
    <Footer/>
    </>
   )}

 </>

);
}
export default Login;