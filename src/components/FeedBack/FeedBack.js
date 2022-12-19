//import
import './FeedBack.css'
import FBI from './FBImg/feedBack.jpg'
import 'animate.css';



//function

const FeedBack =()=>{

    return(

 <div className="container" id="fb">
  <div className="content" id="cont">  
      <h1 id="h-1" class="animate__animated animate__bounce" >  Your Photos  </h1>

      <img  src={FBI} alt="..." id="immgg"></img>

      <h5 id="h-5" > Share your <span> happy </span> moment with us  </h5>

      <a href="..." className="btn"  id="see"> See more </a>
    </div>
 </div>

    );
}



//export
export default FeedBack

