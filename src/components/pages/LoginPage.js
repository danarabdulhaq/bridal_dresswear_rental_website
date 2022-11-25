import Form from '../Form';
import React from 'react';
import '../Textbox.css';



const Login = ()=> { 
  
return (
<div className='register' style={{backgroundColor: "#9174a3"}}>  
   <Form text= "Login to your account"> 
   <div class="form-outline mb-4">
        <input type="email" id="loginEmail" class="text-input" autoComplete='off' required/>
        <label class="label" for="loginName">Email</label>
      </div>
      <div class="form-outline mb-4">
        <input type="password" id="loginPassword" class="text-input" autoComplete='off' required/>
        <label class="label" for="loginName">password</label>
      </div>
      <p className="mb-5 pb-lg-2" >Don't have an account? <a href="#!"
                            >Register here</a></p>
                      
      
    </Form>

    </div> 

);




}


export default Login;