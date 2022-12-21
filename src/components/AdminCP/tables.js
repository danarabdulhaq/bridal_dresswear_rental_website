import './css/styles.css'
import index from  './index'
import Accessoriess from './Accessoriess';
import Bouquet from './Bouquet';
import Dress from './Dress';
     

const table =()=>{


return(

    <div> 
        <link href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css" rel="stylesheet" />
        <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
        <div className="sb-nav-fixed" >
    <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>

       <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
           
           <a className="navbar-brand ps-3" href={index.js} >La belle</a>
          
           <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
          
           <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
               <div className="input-group">
                   <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                   <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
               </div>
           </form>
           <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
               <li className="nav-item dropdown">
                   <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#." role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                   <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                       <li><a className="dropdown-item" href="#!">Settings</a></li>
                       <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                       <li><hr className="dropdown-divider" /></li>
                       <li><a className="dropdown-item" href="#!">Logout</a></li>
                   </ul>
               </li>
           </ul>
       </nav>
       <nav id="layoutSidenav">
           <div id="layoutSidenav_nav">
               <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                   <div className="sb-sidenav-menu">
                       <div className="nav">
                           
                           <div className="sb-sidenav-menu-heading">Interface</div>
                           
                           <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                             
                           </div>
                           <a className="nav-link collapsed" href="#." data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                               <div className="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                               Pages
                               <div className="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                           </a>
                           <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                               <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                  
                                   <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                       
                                   </div>
                                   <a className="nav-link collapsed" href="#." data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                      
                                           <nav className="sb-sidenav-menu-nested nav">
                                               <a className="nav-link" href={Dress.js}>Dress</a>
                                               <a className="nav-link" href={Accessoriess.js}>Accessories</a>
                                               <a className="nav-link" href={Bouquet.js}> Bouquet</a>
                                      </nav>
                                   </a>
                               </nav>
                           </div>
                           <div className="sb-sidenav-menu-heading">Addons</div>
                           <a className="nav-link" href="tables.html">
                               <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                               Tables
                           </a>
                       </div>
                   </div>
                   <div className="sb-sidenav-footer">
                       <div className="small">Logged in as:</div>
                       La belle
                   </div>
               </nav>
           </div>
       </nav>
   </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
        <script src="js/scripts.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" crossorigin="anonymous"></script>
        <script src="js/datatables-simple-demo.js"></script>
    </div>
    

        )
}


export default table