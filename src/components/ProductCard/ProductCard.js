
import React ,{useState} from "react";
import './ProductCard.css';
import '../Register-btn/Register-btn.css'
import './CardDetails.css';
 
const ItemCard = (props)=> {
  // The function is opens and closes the model (Written by Shaimaa Saleem)
  const [Modal,setModal]=useState(false);
  const toggleModal =()=>{
    setModal(!Modal) 
  }
  //The function display product card(Written by Marah Ntsheh)
    const flip = () => {
        var cards = document.querySelectorAll('.item-card');
        [...cards].forEach((card) => {
          card.addEventListener('click', function () {
            card.classList.toggle('is-flipped');
          });
        });
      }
       return(
        <>
   <div className="col-12 col-md-6 col-lg-4 col-xxl-3 d-flex justify-content-center">
          <div className="card item-card" key={props.key} onClick={flip}>
            <div className="card__face card__face--front"><img src={props.img} className="card-image d-block w-100" alt="card-img" /></div>
            <div className="card__face card__face--back"><div class="card-back">
              <h1>{props.name}</h1>
              <hr id='item-hr'/>
              <p>{props.details}</p>
              <p class="item-price"><b>${props.price}</b></p>
              
              <div className="pt-1 mb-4">
        <button  className="btn  btn-lg btn-block" type="button" id="registerBtn"onClick={toggleModal}>MoreDetails</button>
      </div>
            </div>
          </div>
        </div>
     </div>

{Modal && (	
 //The function display more viwe (Written by Shaimaa saleem)
<div className="card mb-3" id="overlay" >
		<div className="modalContaniner">
		     <div className="modalRight">
				<img src={props.img} alt="..." >
        </img>
        <p className="closeBtn" onClick={toggleModal}>X</p>
			 </div>

		    <div className="content">
                   <h5 className="card-title">{props.title}</h5>
                 
				   <div className="description">
			          <p className="card-text"> {props.descri}</p>
				   </div>

                   <div className="size">
			         <p className="card-text">Size:{props.size}</p>
               <p className="card-text">Color:{props.color}</p>
				   </div>

				   <div className="sizeNum">
                      <p className="card-text"><small>Length:{props.len}</small></p>
				      <p className="card-text"><small>Wieth:{props.wiedth}</small></p>
				   </div>

				   <div className="sizesNum">
				     <p className="card-text"><small>Shoulder:{props.shou}</small></p>
				     <p className="card-text"><small>Bust:{props.bus}</small></p>
				    </div>
            <div className="pt-1 mb-4">
       
        <button  className="btn  btn-lg btn-block" type="button" id="registerBtn">AddToCard</button>
        
      </div>
					</div>
		    </div>
		</div>
	  )    }       
</>
); 
        }
        export default ItemCard ;