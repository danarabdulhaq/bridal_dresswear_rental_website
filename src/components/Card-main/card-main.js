import './card-main.css'; 
import dress from './images/dress.jpg';
import flowers from './images/flowers.jpg'
import hair_collar from './images/hair_collar.jpg';
import { Link } from 'react-router-dom';
const card_main = ()=> {
    return (

<div className="container-card-main">
  <div className="box">
    <div className="imgBxCard">
    <img src= {flowers} onClikc={<Link to="/DisplayFlower"/>} />
        </div>
          <div className="content-card-main">
            <h2>Bouquets Of roses</h2>
          </div>
  </div>
  <div className="box">
    <div className="imgBxCard">
    <img src={dress} onClikc={<Link to="/DisplayDress"></Link>} />
        </div>
          <div className="content-card-main">
            <h2>Wedding Dresses</h2>
          </div>
  </div>
  <div className="box">
    <div className="imgBxCard">
    <img src={hair_collar}onClikc={<Link to= "/Displayaccessories"></Link>} />
        </div>
          <div className="content-card-main">
            <h2>Accessories</h2>
          </div>
    </div>
  </div>
   );
  }
  export default card_main;