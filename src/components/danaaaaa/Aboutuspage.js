import React from "react";
import './Aboutuspage.css';
import Teammember from './Team_member.js';

const About = () => {

    return(
                
                                    
        <div className="container"> 
                <div>       

                        <h1 className=' tithead'>About us</h1>
                            <h3 className="head">
                            " Welcome dear La Belle , We hope to gain your trust Get to know us "
                            </h3>


                                   <div className="d-flex flex-row mb-1">
                                    <div className="p-2">      
                                    
                                         <img className='img-fluid his-img' src={require('../images/img-history.jpg')} alt ="image1"   id="imgFluid"/>
                                                            
                                                            <div>
                                                            <h2 className="tit-his"> History </h2>

                                                                <p className="text-his" > La Belle Company was established in 2019. During this period, we have been able to develop our website so that we can rent bridal dresses remotely, with good quality and great trust between us,
                                                                                    During this period, and with the spread of Corona disease, the demand increased through our website for renting dresses, to be a helpful factor in identifying us by the community.</p>
                                                    
                                                            </div>             
                                  </div>
                                    </div>
                                            <div className="d-flex flex-row-reverse">
                                            <div className="p-2"> 
                                            <img className='left-img img-fluid ' id="imgFluid" src={require('../images/img- Our features.jpg')} alt ="image2"/>
                                                            
                                                      

                                                    <div>
                                                    <h2 className="tit-fec">  Our features </h2>

                                                             <p className="text-fec">
                                                             <p/>We save time and effort and ease of booking and receiving the order. There is an ease of reservation with complete clarity and details. There are also a large number of options available from different designs and prices , and we provide all the needs of the bride in one place and at the click of a button.</p>
                                                    </div></div>
                                    </div>



                                     <div>
                                            <h2 className="padd-ourteam"> " Our team member "</h2>

                                            <div className='row rowCard  padd-top' > 
                                                <Teammember name = 'Sophia' identification = 'fashion designer from America'/>
                                                <Teammember name = 'Raya' identification = 'fashion designer from Palestine'/>
                                                <Teammember name = 'Eliana' identification = 'fashion designer from France'/>

                                                
                                            </div>
                                        </div> 

                </div> 

            </div>

    );
    

}

export default About 