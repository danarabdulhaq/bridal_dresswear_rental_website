import './card-main.css'; 
import dress from './images/dress.jpg';
import { Link } from 'react-router-dom';
import whiteFlower from "../images/whiteFlower.jpg"
import earring from './images/earring.jpg'
const CardMain = ()=> {
    return (

<div className="container container-card-main">
  <div className="box mx-4">
    <div className="imgBxCard"onClick={<Link to="/DisplayFlower"/>}>
    <img src= {whiteFlower}  alt=""/>
        </div>
          <div className="content-card-main">
            <h2>Bouquets Of roses</h2>
          </div>
  </div>
  <div className="box mx-4">
    <div className="imgBxCard">
    <img src={dress} onClick={<Link to="/DisplayDress"></Link>} alt=""/>
        </div>
          <div className="content-card-main">
            <h2>Wedding Dresses</h2>
          </div>
  </div>
  <div className="box mx-4">
    <div className="imgBxCard">
    <img src={earring} onClick={<Link to= "/Displayaccessories"></Link>} alt=""/>
        </div>
          <div className="content-card-main">
            <h2>Accessories</h2>
          </div>
    </div>
  </div>
   );
  }
  export default CardMain;