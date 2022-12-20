import Form from '../Form/Form';
import '../Textbox/Textbox'
import '../Form/Form'
const Register = ()=> { 
  
return (
<div className='register' >  
   <Form text= "Sign into your account"> 
   <div className="form-outline mb-4 ">
        <input type="text" id="name" placeholder=" "className="text-input" autoComplete='off' required/>
        <label className="form-label" for="name">Full name</label>
      </div>
      <div className="form-outline mb-4">
        <input type="text" id="city" placeholder=" " className="text-input" autoComplete='off' required/>
        <label className="form-label" for="city">City</label>
      </div>
      <div className="form-outline mb-4">
        <input type="text" id="address" placeholder=" " className="text-input" autoComplete='off' required/>
        <label className="form-label" for="address">Address</label>
      </div>
      <div className="form-outline mb-4">
        <input type="tel" id="phone" placeholder=" " className="text-input" autoComplete='off' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
        <label className="form-label" for="phone">Phone number</label>
      </div>
      <div className="form-outline mb-4">
        <input type="email" id="email" placeholder=" " className="text-input" autoComplete='off' required/>
        <label className="form-label" for="email">Email</label>
      </div>
      <div className="form-outline mb-4">
        <input type="password" id="pass" placeholder=" " className="text-input" autoComplete='off' required/>
        <label className="form-label" for="pass">password</label>
      </div>
    </Form>

    </div> 

);




}


export default Register;