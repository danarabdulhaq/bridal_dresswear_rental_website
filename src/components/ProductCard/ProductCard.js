import './ProductCard.css';
import '../Register-btn/Register-btn.css';
import React ,{useState} from "react";
import Calendar from '../Calendar/Calendar';
const ItemCard = (props)=> {
  
  const [Modal,setModal]=useState(false);
  const toggleModal =()=>{
    setModal(!Modal) 
  }
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
              <p className="item-price"><b>${props.price}</b></p>
              
              <div className="pt-1 mb-4">
        <button  className="btn  btn-lg btn-block" type="button" id="registerBtn"onClick={toggleModal}>MoreDetails</button>
      </div>
            </div>
          </div>
        </div>
     </div>

{Modal && (	
 
<div className="card mb-3" id="overlay" >
		<div className="modalContaniner">
		     <div className="modalRight">
				<img src={props.img} alt="..." >
        </img>
      
        <p className="closeBtn" onClick={toggleModal}>X</p>
			 </div>
		    <div className="content">
                   <h5 className="card-title">{props.name}</h5>
				   <div className="description">
			          <p className="card-text"id="item.details"> {props.descri}</p>
				   </div>
            <div className="pt-1 mb-4">
        <button  className="btn  btn-lg btn-block" type="button" id="registerBtn">AddToCard</button>
      </div>
      <Calendar/> 
    <div className="pt-1 mb-4">
        <button  className="btn  btn-lg btn-block" type="button" id="registerBtn">RantNow</button>
      </div>
					</div>
		    </div>
		</div>

	  )    }       
</>
); 
        }
        export default ItemCard ;