import "./Slider.css";

import image1 from './Images/s1.webp';
import image2 from './Images/s2.jpg';
import image3 from './Images/s3.jpg';
import image4 from './Images/s4.jpg';
import image5 from './Images/s5.jpg';
import image6 from './Images/s6.jpg';
import image7 from './Images/s7.jpg';

const Slider = ()=> {
    return(
       <div>
   <div  className="carousel slide " data-bs-ride="carousel">
     <div className="carousel-inner">
       <div className="carousel-item active" data-bs-interval="5000">
         <img src={image1} className="d-block w-100" alt="..."/>
       </div>
       <div className="carousel-item" data-bs-interval="5000">
         <img src={image2} className="d-block w-100" alt="..."/>
       </div>
       <div className="carousel-item" data-bs-interval="5000">
         <img src={image3} className="d-block w-100" alt="..."/>
       </div>
       <div className="carousel-item" data-bs-interval="5000">
         <img src={image4} className="d-block w-100" alt="..."/>
       </div>
       <div className="carousel-item" data-bs-interval="5000">
         <img src={image5} className="d-block w-100" alt="..."/>
       </div>
       <div className="carousel-item" data-bs-interval="5000">
         <img src={image6} className="d-block w-100" alt="..."/>
       </div>
       <div className="carousel-item" data-bs-interval="5000">
         <img src={image7} className="d-block w-100" alt="..."/>
       </div> 
     </div>
   </div>
   </div>
   
    );
   }
   
   export default Slider;