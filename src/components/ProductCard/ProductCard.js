import './ProductCard.css';
import '../Register-btn/Register-btn.css';
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
            <div className="card__face card__face--back"><div className="card-back">
              <h1>{props.name}</h1>
              <hr id='item-hr'/>
              <p>{props.details}</p>
              <p className="item-price"><b>{props.price}</b></p>


 <div className="pt-1 mb-4">
        <button className="btn  btn-lg btn-block" type="button" id="registerBtn">more details</button>
      </div>


            </div></div>
         </div> </div>);
          
           
        
        }
        export default ItemCard ;