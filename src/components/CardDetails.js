// import
import React from "react"
import './CardDetails.css'
//function

const CardDetails = () => {
  return(
	
	<div className="container" >
		<div className="details">
		    <div className="leftt"></div>
		    <div className="rightt">
                   <h5 className="card-title">Description for item ...</h5>
			       <p className="card-text"> Description of the piece here in terms of length, width, description of materials, design, designer, etc .</p>
			       <p className="card-text-t"><small>Size : M</small></p>
				   <p className="card-text-c"><small>Color : White</small></p>
				   <button  className="btn-rent"> Rent Now </button>
		    </div>
		</div>
	</div>  
  );
}



//export
export default CardDetails