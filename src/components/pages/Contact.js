// import
import React from "react"
import './Contact.css'

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
			  <button className="btn">Send</button>
		    </div>
	    </div>

	</div>
    );
 }
 

 // export
export default Contact