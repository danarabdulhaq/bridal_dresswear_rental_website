import React,{useEffect} from 'react';
import logo from '../images/labellelogo .png'
import {  Link } from "react-router-dom";
import './Footer.css';

const Footer = () =>  {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div id="footer">
    <footer className="text-center text-lg-start bg-light text-muted ">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
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
              <Link className="text-reset" to={"/DisplayDress"} onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>Dress</Link>
              </p>
              <p>
                <Link className="text-reset"to={'/DisplayFlower'} onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>Roses</Link>
              </p>
              <p>
                <Link className="text-reset" to={'/Displayaccessories'} onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>Accessories</Link>
              </p>
            </div>
            
    
            
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <Link className="text-reset"to={'/'} onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>Home</Link>
              </p>
              <p>
                <Link className="text-reset"to={'/Services'} onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>Services</Link>
              </p>
              <p>
                <Link className="text-reset"to={'/AboutUs'} onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>AboutUs</Link>
              </p>
              <p>
                <Link className="text-reset"to={'/ContactUs'} onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>ContactUs</Link>
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