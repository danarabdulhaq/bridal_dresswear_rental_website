import React from "react";
import {  Link } from "react-router-dom";
import'./Navbar.css'
function Navbar() {
    return (

    
        <>
        <nav className="navbar navbar-expand-lg  navbar-light bg-light">
          <div className="container-fluid">
            <Link  className="navbar-brand"to="/">La bella</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ContactUs">Contact Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Services">Services</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/AboutUs">About Us</Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
        </>
    );


}
export default Navbar;
