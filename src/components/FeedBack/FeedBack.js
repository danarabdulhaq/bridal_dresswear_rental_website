//import
import './FeedBack.css'
import FBI from './FBImg/feedBack.jpg'
import 'animate.css';
import { Link } from 'react-router-dom';
//function

const FeedBack =()=>{

    return(

    <div className="container" id="cont" >
		<div className="row">
		  <div className="col" id='R'>
            <h1 id="h-1" class="animate__animated animate__bounce" >  Share your happy moment with us ... </h1>
            <h4 id="h-4" > we would love to see you wear our items on your happiest day ever  </h4>
            <Link className="btn"  id="see" to='/Fback'>See more</Link>
		  </div>

		  <div className="col img-col" id='L'>
              <img className='img' src={FBI} alt="..." id="immgg"></img>
          </div>
	    </div>
	</div>

    );
}



//export
export default FeedBack

