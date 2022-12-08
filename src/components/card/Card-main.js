//imports
import "./card.css";

//function
const Card = props => {
  return (

 <div className="card">
  <div calssName="imgbox">
  <img src={props.imgsrc}className="card-img-top"></img>   
  </div>
  <div className="content">
  <p calssName="card-text">{props.text}</p>
  <a href={props.link}>lets goo</a>
    </div>
   </div>
);
};

//Export
 export default Card