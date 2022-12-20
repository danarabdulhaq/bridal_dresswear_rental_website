 import './ServiceStyle.css';
 import React from "react";
import '../../BTN/Button.css';
import dresss from './dressss.jpg';
import delivery from './delivery.jpg';
import flowers from './flowerS.jpg';
import accessoriss from './accessoriss.jpg';
import { Link } from 'react-router-dom';


const Service =()=>{
      return(
            <>
                  <div  id='ServiceHeader'>
                        <h2 id='headOfService'>Our Service</h2>
                        <h5 id='midOfService'>  Our beautiful la belle, we offer you our services to be the queen of your beautiful night </h5>
                        </div>




                        <div className="col align-self-start"id='infoCardSide'>
                              <div className="card mb-3 "  >
                                    <div className="row g-0">
                                    <div className="col-md-4">
                                          <img src={dresss} className="img-fluid rounded-start" alt="..."/>
                                    </div>
                                    <div className="col-8">
                                          <div className="card-body">
                                          <h5 className="card-title">Card title</h5>
                                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                          </div>
                                          
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                        <div className="col " id='infoCardSide'>
                        <div className="card mb-3 "  >
                              <div className="row g-0">
                              
                              <div className="col-8">
                                    <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <img src={flowers} className="img-fluid rounded-start" alt="..."/>
                              </div>
                              </div>
                              </div>
                              </div>
                        <div className="col "id='infoCardSide'>
                        <div className="card mb-3 "  >
                              <div className="row g-0">
                              <div className="col-md-4">
                                    <img src={accessoriss} className="img-fluid rounded-start" alt="..."/>
                              </div>
                              <div className="col-8">
                                    <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                              </div>
                              </div>
                              </div>
                              </div>
                        
                                                
                                          


                                                      

                 <div id='serviceBtn'><Link to="/ContactUs">
                 <button className="about-me">
  <span className="circle">
<span className="icon arrow"></span>
  </span>
  <span className="button-text">Contact Us</span>
 
</button> </Link>
                  
                  </div>

                  <div id='servicePageBottom'>
                        <h2 id='HTW'>How it Works</h2>
                        <div className="container text-center">
                              <div className="row">
                              <div className="col">
                                    <h3>1</h3>
                                    <h4>Login to your account</h4>
                                    <p>if you don't have an account create one 😉</p>
                                    <Link to="/Login">
                                    <button className="about-me">
                                    <span className="circle">
                                    <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">Login</span>
                                    </button>
                                    </Link>
                              </div>
                              <div className="col">
                                          <h3>2</h3>
                                          <h4>shopping🛒</h4>
                                          <p>pick item that fit you </p>
                              </div>
                              <div className="col">
                                          <h3>3</h3>
                                          <h4>congratulation !</h4>
                                          <p> enjoy in you'r big day❤</p>
                              </div>
                              </div>
                              </div>
                  </div>
            </>
      );
}


 export default Service;                              
