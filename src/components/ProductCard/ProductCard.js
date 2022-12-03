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
        <div >
        <div className="scene scene--card "  onClick={flipp}>
  <div className="card">
    <div className="card__face card__face--front"><img src={props.img} className="d-block w-100" alt="..."/></div>
    <div className="card__face card__face--back"><div class="card-back">
					<h1>{props.name}</h1>
					<hr />
					<p>{props.details}</p>
				<p class="item-price"><b>${props.price}</b></p>
        <Btn title = "More info" />
				</div></div>
  </div>
</div>

</div>
    );



}

export default ProductCard ;