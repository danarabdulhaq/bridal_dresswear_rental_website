import React from "react";
import Slider from "../Slider/Slider"
import HomeDesign from '../HomePageDesign/AboutDesign'
import CardMain from "../Card-main/card-main";
import FeedBack from '../FeedBack/FeedBack'
import HPDesign from '../HomePageDesign/HPDesign'


const Home=()=>
{
return(
<>
    <Slider/>
    <HPDesign/>
    <div className="mx-5">
        <CardMain/></div>
            <div className="my-5 mx-3" id="vid">
                <HomeDesign/>
            </div>
                    <FeedBack/>
</>
)}
export default Home;