import React from "react";
//import LayoutSidenav from '../AdminCP/S'
import './css/styles.css'
import R from './ssjj'
import {  Link } from "react-router-dom";  
import { useState } from "react";
import TableFill from "./TableFill";
import Table from "./Table"; 
import data from '../Accessoriss/DataForAccessoris';

const Accessoriess=()=>{
    const [tableList, settableList] = useState(data);

return(

    <>
    <div>
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

                                     <Link className="nav-link" to="/ACPRegister">
                                        <div className="sb-nav-link-icon"><i ></i></div>
                                        Regisret
                                        </Link>
                             </div>
                         </div>
                         <div className="sb-sidenav-footer">
                             <div className="small">Logged in as:</div>
                             La belle
                         </div>
                     </nav>
                 </div>
                 <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                    <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Tables</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><Link to="/Index.js">Dashboard</Link></li>
                            <li className="breadcrumb-item active">Tables</li>
                        </ol>
                        <div className="card mb-4">
                            <div className="card-body">
                                DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the
                                <Link target="_blank" to="https://datatables.net/">official DataTables documentation</Link>
                                .
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fas fa-table me-1"></i>
                                DataTable Example
                            </div>
                            <div className="card-body">
                            <Table>
 
 {tableList.map(( data)=> {
 
                                     return(
<TableFill url={data.url} name={data.name} details={data.details} color={data.color} price={data.price}/>);
                                 })
 
                                }    
</Table>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Your Website 2022</div>
                            <div>
                                <Link to="/">Privacy Policy</Link>
                                &middot;
                                <Link to="/">Terms &amp; Conditions</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
                    </div>
                </main>
            </div>
             </div>               
        
         
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossOrigin="anonymous"></script>
        <script src="js/scripts.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"></script> 
        <script src="js/datatables-simple-demo.js"></script>
        </div>
                
    </>


)}

export default Accessoriess