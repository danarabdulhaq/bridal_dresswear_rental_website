import './ProductCard.css';
import Btn from '../Register-btn/Register-btn';


const ProductCard = (props)=> {
 const flipp =()=>{

    var cards = document.querySelectorAll('.card');

    [...cards].forEach((card)=>{
      card.addEventListener( 'click', function() {
        card.classList.toggle('is-flipped');
      });
    });}
    return(
<<<<<<< HEAD:src/components/ProductCard.js
        <div>
                <div className="scene scene--card "  onClick={flipp}>
          <div className="card">
            <div className="card__face card__face--front"><img src={props.img} className="d-flex-row w-100" alt="..."/></div>
            <div className="card__face card__face--back"><div className="card-back">
                  <h1>{props.name}</h1>
                  <hr />
                  <p>{props.details}</p>
                <p className="item-price"><b>${props.price}</b></p>
                <Btn title = "More info" />
                </div></div>
          </div>
=======
      <div className= "col-12 col-md-6 col-lg-4 col-xxl-3">
  <div className="card" onClick={flipp}>
    <div className="card__face card__face--front"><img src={props.img} className="d-flex-row w-100" alt="..."/></div>
    <div className="card__face card__face--back">
      <div className="card-back">
					<h1>{props.name}</h1>
					<hr />
					<p>{props.details}</p>
				<p className="item-price"><b>${props.price}</b></p>
        <Btn title = "More info" />
				</div>
  </div>
>>>>>>> e6f4d23b3f76298dc52b2dc6ef670d46e00951d9:src/components/ProductCard/ProductCard.js
</div>

</div>
    );



}

export default ProductCard ;