import React from 'react';
import logo from '../images/labellelogo .png'
import {  Link } from "react-router-dom";
import './Footer.css'

const Footer = () =>  {
  return (
    <div id="footer">
    <footer className="text-center text-lg-start bg-light text-muted ">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
    
        </div>
    
        <div>
          <Link to={""} className="me-4 link-secondary">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to={""} className="me-4 link-secondary">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to={""} className="me-4 link-secondary">
            <i className="fab fa-google"></i>
          </Link>
          <Link to={""} className="me-4 link-secondary">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </section>
    
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 gx-5  ">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3 text-secondary"></i>La belle
              </h6>
              
              <img id='footerLogo' src={logo} alt=''/>
              
            </div>
    
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
              <Link className="text-reset" to={"/DisplayDress"}>Dress</Link>
              </p>
              <p>
                <Link className="text-reset"to={'/DisplayFlower'}>Roses</Link>
              </p>
              <p>
                <Link className="text-reset" to={'/Displayaccessories'}>Accessories</Link>
              </p>
            </div>
            
    
            
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <Link className="text-reset"to={'/'}>Home</Link>
              </p>
              <p>
                <Link className="text-reset"to={'/Services'}>Services</Link>
              </p>
              <p>
                <Link className="text-reset"to={''}>AboutUs</Link>
              </p>
              <p>
                <Link className="text-reset"to={'/ContactUs'}>ContactUs</Link>
              </p>
            </div>
            
    
           
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
             
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3 text-secondary"></i> Nablus-NNU</p>
              <p>
                <i className="fas fa-envelope me-3 text-secondary"></i>
                Labella@gmail.com
              </p>
              <p><i className="fas fa-phone me-3 text-secondary"></i> + 09 888 888 88</p>
            </div>
            
          </div>
         
        </div>
      </section>
      
    
      
      <div className="text-center p-4" >
        © 2022 Copyright:
        <div  className="text-reset fw-bold" >NNU-CAP</div>
      </div>
    
    </footer>
    
    
    
    </div>
    
  );
}

export default Footer