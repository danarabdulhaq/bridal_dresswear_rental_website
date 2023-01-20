import './card-main.css'; 
import { Link } from 'react-router-dom';
const CardMain = ()=> {
    return (

<div className="container container-card-main">

  <div className="box mx-4">
            <Link to="/DisplayFlower">
    <div className="imgBxCard">
    <img src= {localStorage.getItem('flowerImg')}  alt=""/>
        </div>
          <div className="content-card-main">
            <h2>Bouquets Of roses</h2>
          </div>
            </Link>

  </div>
  <div className="box mx-4">
      <Link to="/DisplayDress">

    <div className="imgBxCard">
      
    <img src={localStorage.getItem('DressImg')} alt=""/>
     
        </div>
          <div className="content-card-main">
            <h2>Wedding Dresses</h2>
          </div>
             </Link>

  </div>
  <div className="box mx-4">
  <Link to= "/Displayaccessories">
    <div className="imgBxCard">
    <img src={localStorage.getItem('AccessImg')}  alt=""/>
        </div>
          <div className="content-card-main">
            <h2>Accessories</h2>
          </div>
          </Link>
    </div>
  </div>
   );
  }
  export default CardMain;