import React from "react";
import Slider from "../Slider/Slider"
import Card from '../card/Card-main'
import Roses from '../images/flowers.jpg'
import HairCollar from '../images/hair collar.jpg'
import dress from '../images/white_dantiel.jpg'
import HomeDesign from '../HomePageDesign/AboutDesign'


const Home=()=>
{
return(
<>
<Slider/>




<div className=" align-items-center mx-4 my-4">
    <div className="row">
        <div className="col">
            <Card imgsrc={Roses}/>
        </div>
            <div className="col">
        <Card imgsrc={HairCollar}/>
            </div>
            <div className="col">
                <Card imgsrc={dress}/>
            </div>
        </div>
</div>
<div className="my-5" id="vid">
    <HomeDesign/>
</div>





</>


)




}
export default Home;