// import
import React from "react"
import './CardDetails.css'
import CDI from './images/testCardDetailsImg.jpg';


//function

const CardDetails = () => {
    return(
	
        <div className="container">
		   <div className="details-box">
		      <div className="leftt">
			   <img className="CDI" src={CDI} alt="..."></img></div>
			    <div className="rightt">
				 <h3>Description for item ... </h3>
				 <h5> Description of the piece here in terms of length, width, description of materials, design, designer, etc </h5>
				 <h4>Size : M</h4>
				 <h4>Color : White</h4>
				 <button className="rent-btn"> Rent Now </button>
			    </div>
		   </div>
	   </div>
    );
}



//export
export default CardDetails