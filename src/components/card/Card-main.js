//imports
import "./card.css";
import Btn from '../BTN/Btn'
//function
const Card = props => {
  return (
 <div className="card">
  <div className="imgbox">
  <img src={props.imgsrc}className="card-img-top" alt=''></img>   
  </div>
  <div className="content">
  <p className="card-text">{props.text}</p>
<Btn/>
    </div>
      </div>
);
};
//Export
 export default Card