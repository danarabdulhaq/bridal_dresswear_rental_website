// import
import React from "react"
import './CardDetails.css'

//function

const CardDetails = () => {
  return(
	
	<div className="container" >
		<div className="details-box">
		     <div className="leftt">
			 </div>
		    <div className="rightt">
                   <h5 className="card-title">Description for item</h5>

				   <div className="description">
			          <p className="card-text"> Description of the piece here in terms of length, width, description of materials, design, designer, etc .</p>
				   </div>

                   <div className="size">
			         <p className="card-text">Size : M</p>
				   </div>

				   <div className="sizeNum">
                      <p className="card-text"><small>length: 130cm</small></p>
				      <p className="card-text"><small>Waist: 74cm</small></p>
				   </div>

				   <div className="sizesNum">
				     <p className="card-text"><small>Shoulders: 70cm</small></p>
				     <p className="card-text"><small>Bust: 94cm</small></p>
				    </div>
                    <div className="color">
				     <p className="card-text">Color : White</p>
					 </div>
					 <a href="..." className="btn-rent">Rent Now</a>
		    </div>
		</div>
	</div>  
  );
}


//export
export default CardDetails