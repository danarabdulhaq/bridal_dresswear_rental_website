// import
import React from "react";
import './CardDetails.css';
import CDI from './images/testCardDetailsImg.jpg';


//functions
const CardDetails = () => {
    return(
	
        <div className="theContainer">
		   <div className="details-box">
		      <div className="left">
			   <img className="CDI" src={CDI} alt="..."></img>
			  </div>
			     <div className="right">
				 <h3>Description for item ... </h3>
				 <pre> Description of the piece here in terms of length, width, description of materials, design, designer, etc </pre>
				 <button className="rent-btn"> Rent Now </button>
			  </div>
		   </div>
	   </div>
    );
}

//export
export default CardDetails