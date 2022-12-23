import React from 'react'
import './css/styles.css'
import './js/scripts'
import {  Link } from "react-router-dom";   

function layoutSidenav () {


    return (

        <>
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

                                    <div className="sb-sidenav-menu-heading">Interface</div>

                                    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">

                                    </div>
                                    <Link className="nav-link collapsed"  to="#." data-bs-toggle="collapse" data-bs-target="#collapsePages">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book-half" viewBox="0 0 16 16">
                                            <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                                        </svg>
                                        <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                        Pages
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrows-expand" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8ZM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2ZM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10Z" />
                                        </svg>
                                    </Link>
                                    <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                        <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">

                                            <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">

                                            </div>
                                            <Link className="nav-link collapsed"  to="#." data-bs-toggle="collapse" data-bs-target="#pagesCollapseError">

                                                <nav className="sb-sidenav-menu-nested nav">
                                                    <Link className="nav-link"  to="/Dress">Dress</Link>
                                                    <Link className="nav-link"  to="/Accessoriess">Accessories</Link>
                                                    <Link className="nav-link"  to="/Bouquet">Bouquet</Link>
                                                </nav>
                                            </Link>
                                        </nav>
                                    </div>
                                    <div className="sb-sidenav-menu-heading">Addons</div>
                                    <Link className="nav-link" to="/Tables">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-table" viewBox="0 0 16 16">
                                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z" />
                                        </svg>
                                        <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                        Tables
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
            <script src="/scripts.js"></script>
        </>



    );
}

export default layoutSidenav