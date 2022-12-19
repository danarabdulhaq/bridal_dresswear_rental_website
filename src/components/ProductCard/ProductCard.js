import './ProductCard.css';
import Btn from '../Register-btn/Register-btn';
const ItemCard = (props)=> {

    const flip = () => {

        var cards = document.querySelectorAll('.item-card');
    
        [...cards].forEach((card) => {
          card.addEventListener('click', function () {
            card.classList.toggle('is-flipped');
          });
        });
      }
       return(

          <div className="col-12 col-md-6 col-lg-4 col-xxl-3 d-flex justify-content-center">
          <div className="card item-card" key={props.key} onClick={flip}>
            <div className="card__face card__face--front"><img src={props.img} className="card-image d-block w-100" alt="card-img" /></div>
            <div className="card__face card__face--back"><div class="card-back">
              <h1>{props.name}</h1>
              <hr id='item-hr'/>
              <p>{props.details}</p>
              <p class="item-price"><b>{props.price}</b></p>
<Btn title="more details" />
            </div></div>
         </div> </div>);
          
           
        
        }
        export default ItemCard ;