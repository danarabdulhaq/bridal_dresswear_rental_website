import Form from '../Form/Form';
import React,{useState} from 'react';
import '../Textbox/Textbox';
import {  Link } from "react-router-dom";




const Login = ()=> { 
  
const [Email,setEmail]=useState('');
const[Pass,setPass]=useState('');


const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(Email);
}


return (
  <form onSubmit={handleSubmit}> 
<div className='register' >  
   <Form text= "Login to your account"> 
   <div className="htmlForm-outline mb-4">
            <label className="label" htmlFor="Email">Email</label>

        <input className="form-control" type="email" value={Email} onChange={(e)=>setEmail(e.target.value)} placeholder="email@gmail.com" id="email" name='email' required/>
      </div>
      <div className="htmlForm-outline mb-4">
        <label className="label" htmlFor="Pass">password</label>
        <input className="form-control" value={Pass}onChange={(e)=>setPass(e.target.value)} type="password" id="Pass"placeholder="********"name='pass' required/>
        
      </div>
      <p >Don't have an account?<Link className="mb-5 pb-lg-2" to="/Register">Register here</Link></p>
    </Form>

    </div> 
</form>
);




}


export default Login;