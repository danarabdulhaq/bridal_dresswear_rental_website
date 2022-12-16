import React from "react";
import Slider from "../Slider/Slider"
import HomeDesign from '../HomePageDesign/AboutDesign'
import CardMain from "../Card-main/card-main";


const Home=()=>
{
return(
<>
    <Slider/>
        <CardMain/>
            <div className="my-5" id="vid">
                <HomeDesign/>
            </div>
</>
)}
export default Home;