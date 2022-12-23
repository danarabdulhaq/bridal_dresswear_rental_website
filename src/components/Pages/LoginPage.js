import Form from '../Form/Form';
import React from 'react';
import '../Textbox/Textbox.css';
import { Link } from 'react-router-dom';
import  '../Register-btn/Register-btn.css';
import { useState } from 'react';


const loginData=[
  
  {Email:'abc@gmail.com',Password:"12345",state:false}
]

const Login = ()=> { 
  
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')



return (
  <>

<div className='register' >  
   <Form text= "Login to your account"> 
   <div className="form-outline mb-4">
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="loginEmail" className="text-input" autoComplete='off' required/>
        <label className="label" for="loginName">Email</label>
      </div>
      <div className="form-outline mb-4">
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="loginPassword" className="text-input" autoComplete='off' required/>
        <label className="label" for="loginName">password</label>
      </div>
      <p className="mb-5 pb-lg-2" >Don't have an account? <Link to="/Register">Register here</Link></p>
      <div className="pt-1 mb-4">
        <button className="btn" type="button" id="registerBtn">Login</button>
      </div>
      
    </Form>

    </div> </>

);




}


export default Login;