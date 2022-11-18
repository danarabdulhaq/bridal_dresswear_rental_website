// import
import React from "react"
import './Contact.css'
import img3 from'./images/M3.jpg'

//function
const Contact = () => {
    return(
        <div className="container" >
           <div className="hwfbwjf">
            <h2 className="paragraph">Contact Us</h2>
            <input className="name" type="text" class="fieldN" placeholder="Your Name"></input>
            <input className="email" type="text" class="fieldE" placeholder="Your Email"></input>
            <input className="phone" type="text" class="fieldP" placeholder="Phone">
            </input> <textarea placeholder="Message" class="field"></textarea>
            <button className="btn">Send</button>
            <img className="image" src={img3} alt="please wait my beautiful girl"></img>
            <button type="submit">Send</button>
            </div>
        </div>
    
    )
 }
 
 // export
export default Contact