// import
import React from "react"
import img1 from'./images/M1.jpg'
import img2 from'./images/M2.jpg'
import './Design.css'
//function
const Design = () => {
    return(
      
      <div className="main">
          <img className="image1" src={img1} alt="please wait my beautiful girl"></img>
          <img className="image2" src={img2} alt="please wait my beautiful girl"></img>
      
          <h3 className="paragraph1" ><pre> We add one more member to our family</pre></h3>
          <h3 className="paragraph2" ><pre> best wishes to you both</pre></h3>

          <h3 className="paragraph3" ><pre> Best is yet to come</pre></h3>
          <h3 className="paragraph4" ><pre> cherish each moment along this journey</pre></h3> 
      </div>
    )
 }
  // export
  export default Design