import React from "react";
import './Navbar.css';
function Navbar() {
    return (

        <>
            <nav class="fixed">
                <div className="logo">
                     <img src={require('../imgo.jpg')} alt="error" width="35"height="35"  /> 

                </div>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href="#">Contact</a> </li>
                    <li><a href="#">Services</a> </li>
                    <li><a href="#">About us</a> </li>
                </ul>


            </nav>

            <div className="bot"></div>
        </>
    );


}
export default Navbar;
