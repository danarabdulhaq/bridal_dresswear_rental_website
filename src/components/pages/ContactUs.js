// import
import React from "react";
import './ContactUs.css';

//function
const Contact = () => {
    return(
		
	<div className="container">
		<div className="contact-box">
		<div className="left"></div>
			<div className="right">
			  <h2>Contact Us</h2>
			  <input type="text" className="field" placeholder="Your Name"></input>
			  <input type="text" className="field" placeholder="Your Email"></input>
			  <input type="text" className="field" placeholder="Your Phone"></input>
			  <textarea placeholder="Your Message PLS" className="field"></textarea>
			  <a href="..." className="btn">Send</a>

		    </div>
	    </div>
	</div>
    );
 }
 
 

 // export
export default Contact