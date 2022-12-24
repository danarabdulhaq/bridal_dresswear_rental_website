import React from 'react'
import './css/styles.css'

import R from './ssjj'
import {  Link } from "react-router-dom";   

function layoutSidenav () {


    return (

        <>
       <R />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

            <div className="sb-nav-fixed">

             <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
              
                <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">

                    <Link className="navbar-brand ps-3" type='button'  to="/Index">La belle</Link>

                    <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>

                    <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                        <div className="input-group">
                            <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                            <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
                        </div>
                    </form>
               
                    <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="navbarDropdown"  to="/" data-bs-toggle="dropdown"><i className="fas fa-user fa-fw"></i></Link>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item"  to="#!">Settings</Link></li>
                                <li><Link className="dropdown-item"  to="#!">Activity Log</Link></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><Link className="dropdown-item" to="#!">Logout</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                            <div className="sb-sidenav-menu">
                                <div className="nav">
                                 <div className="sb-sidenav-menu-heading">Core</div>
                                  <Link className="nav-link" to="/Index.">
                                 <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                 Dashboard
                                  </Link>
                                   

                                    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">

                                    </div>
                                    <Link className="nav-link collapsed"  to="#." data-bs-toggle="collapse" data-bs-target="#collapsePages">
                                    
                                       
                                        
                                    </Link>
                                    <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                        <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">

                                        <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">

                                            </div>
                                            <Link className="nav-link collapsed"  to="#." data-bs-toggle="collapse" data-bs-target="#pagesCollapseError">

                                            </Link>
                                        </nav>
                                    </div>
                                    <div className="sb-sidenav-menu-heading">Addons</div>
                                   
                                       
                                        <div className="sb-nav-link-icon"><i className="fas fa-table"></i>  Tables</div>
                                        
                                        
                                        <Link className="nav-link" to="/Dress">
                                    <div className="sb-nav-link-icon"><i ></i></div>
                                        Dress
                                        </Link>

                                        <Link className="nav-link" to="/Accessoriess">
                                        <div className="sb-nav-link-icon"><i ></i></div>
                                        Accessories
                                        </Link>

                                        <Link className="nav-link" to="/Bouquet">
                                        <div className="sb-nav-link-icon"><i ></i></div>
                                        Bouquet
                                        </Link>
                                </div>
                            </div>
                            <div className="sb-sidenav-footer">
                                <div className="small">Logged in as:</div>
                                La belle
                            </div>
                        </nav>
                    </div>
                   
                </div>
                
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
                            <h1>REEMA</h1>
                        </div>
                    </main>
                </div>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"></script>                
           
            <div>
          
           </div>
                      
        </>
       
    );
}






export default layoutSidenav 

