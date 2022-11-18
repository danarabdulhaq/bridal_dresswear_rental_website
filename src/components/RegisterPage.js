import Form from './Form';
import './Textbox.css'

const Register = ()=> { 
  
return (
<div className='register' style={{backgroundColor: "#9174a3"}}>  
   <Form text= "Sign into your account"> 
   <div class="form-outline mb-4">
        <input type="text" id="name" placeholder=" "class="text-input" autoComplete='off' required/>
        <label class="label" for="name">Full name</label>
      </div>
      <div class="form-outline mb-4">
        <input type="text" id="city" placeholder=" " class="text-input" autoComplete='off' required/>
        <label class="label" for="city">City</label>
      </div>
      <div class="form-outline mb-4">
        <input type="text" id="address" placeholder=" " class="text-input" autoComplete='off' required/>
        <label class="label" for="address">Address</label>
      </div>
      <div class="form-outline mb-4">
        <input type="tel" id="phone" placeholder=" " class="text-input" autoComplete='off' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
        <label class="label" for="phone">Phone number</label>
      </div>
      <div class="form-outline mb-4">
        <input type="email" id="email" placeholder=" " class="text-input" autoComplete='off' required/>
        <label class="label" for="email">Email</label>
      </div>
      <div class="form-outline mb-4">
        <input type="password" id="pass" placeholder=" " class="text-input" autoComplete='off' required/>
        <label class="label" for="pass">password</label>
      </div>
    </Form>

    </div> 

);




}


export default Register;