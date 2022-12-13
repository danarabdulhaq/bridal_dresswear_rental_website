//import
import React from "react";
import aboutVid from '../images/aboutVideo.mp4'
import './AboutDesign.css'


//functions
const AboutDesign=()=>{
return(

<div className="about" >

 <h1 className="heading"> <span> Welcome </span> here </h1>

 <div className="row">

    <div className="video-container">
       <video src={aboutVid} autoPlay loop muted  ></video>
        <h3>Best wishes</h3>
    </div>

    <div className="content">
        <h3>Why la belle</h3>
        <p>We offer you the latest, most beautiful and elegant dresses, accessories and packages to get the most beautiful look on your special day.</p>
        <p>Best is yet to come, cherish each moment along this journey .</p>
        <a href="..." className="btn">Learn more</a>
    </div>

 </div>

</div>


);
}


//export
export default AboutDesign