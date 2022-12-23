//import
import React from "react";
import aboutVid from './homeV/aboutVideo.mp4'
import './AboutDesign.css'
import { Link } from "react-router-dom";

//functions
const AboutDesign=()=>{
return(

<div className="about" >

  <div className="row" id="row">

    <div className="video-container">
       <video src={aboutVid} autoPlay loop muted  ></video>
        <h3>Best wishes</h3>
    </div>

    <div className="content-c"  >
        <h3>Why la belle</h3>
        <p>We offer you the latest, most beautiful and elegant dresses, accessories and packages to get the most beautiful look on your special day.</p>
        <p>Best is yet to come, cherish each moment along this journey .</p>

        <Link to="/AboutUs" className="btn" >Learn more</Link>


    </div>

 </div>

</div>


);
}


//export
export default AboutDesign