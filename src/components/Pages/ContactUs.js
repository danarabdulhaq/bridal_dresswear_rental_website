// import
import React,{useRef} from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './ContactUs.css';
import MassagesData from "../Data/ContactUsData";




//function
const Contact = () => {
	const name=useRef()
	const email=useRef()
	const phone=useRef()
	const text=useRef()
const handelClick=()=>{
	localStorage.setItem('name',name.current.value)
	localStorage.setItem('phone',phone.current.value)
	localStorage.setItem('countEmail',email.current.value)
	localStorage.setItem('text',text.current.value)
MassagesData.push({name:localStorage.getItem("name")	,phone:localStorage.getItem("phone")	,email:localStorage.getItem("contEmail")	,text:localStorage.getItem("text")},)

}
    return(
		<>
		<Navbar/>
	<div className="container-cc" id="cc" >

		<div className="contact-box">
		<div className="left">
		</div>
			<div className="right">
				<h2 id="h--2" >Contact Us</h2>
				<input type="text" className="field"ref={name} placeholder="Your Name"></input>
				<input type="email" className="field"ref={email} placeholder="Your Email"></input>
				<input type="tel" className="field"ref={phone} placeholder="Your Phone"></input>
				<textarea placeholder="Your Message PLS"ref={text} className="field"></textarea>
				<button className="btn" onClick={handelClick}>Send</button>

		    </div>
	    </div>
	</div>
	<Footer/>
	</>
    );
 }
 
 

 // export
export default Contact
