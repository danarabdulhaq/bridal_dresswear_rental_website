
// import
import React from "react"
import './CardDetails.css'

//function
const CardDetails = (props) => {
	
  return(
	
	<div className="container" id="detBox">
		<div className="details-box">
		     <div className="leftt">
				<img src={props.img} alt="..." ></img>
			 </div>
		    <div className="rightt">
                   <h5 className="card-title">{props.title}</h5>

				   <div className="description">
			          <p className="card-text"> {props.descri}</p>
				   </div>

                   <div className="size">
			         <p className="card-text">{props.size}</p>
				   </div>

				   <div className="sizeNum">
                      <p className="card-text"><small>{props.len}</small></p>
				      <p className="card-text"><small>{props.wiedth}</small></p>
				   </div>

				   <div className="sizesNum">
				     <p className="card-text"><small>{props.shou}</small></p>
				     <p className="card-text"><small>{props.bus}</small></p>
				    </div>
                    <div className="color">
				     <p className="card-text">{props.color}</p>
					 </div>
					 <a href="..." className="btn-rent">Rent Now</a>
		    </div>
		</div>
	</div>  
  );
}


//export
export default CardDetails


