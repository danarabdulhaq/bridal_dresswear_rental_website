// import
import React from "react"
import './Card.css'
import testCardImg from"./images/testCardImg.jpg"



//function
const Card = () => {
    return(

    <div className="cardContainer">
        <div className="card" >
            <img src={testCardImg} className="cardImg" alt="..."></img>
              <div className="cardBody">
                      <h1 className="cardTitle">White dress with small flowers</h1>
                      <p className="cardDetails">Small details</p>
                      <h1 className="price"> 89.99$ </h1>
                      <button className="btnPrimary">View more</button>
                </div>
        </div>
     
    </div>   
 )
}


// export
export default Card
