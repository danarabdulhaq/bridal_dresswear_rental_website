import React from "react";
import './Aboutuspage.css';

import Teammember from './Team_member';

//i try to put d-flex but it dosn't work 

const About = () => {


    return(
                
                                    
        <div className="container"> 
                <div className='border-for-about'>       
                        <h1 className='tithead'>About us</h1>
                            <h3>
                            " Welcome dear La Belle , We hope to gain your trust Get to know us "
                            </h3>
                            <div className="img-circle-head" src={require('../images/Display_dresse.jpg')} alt="" ></div>

                                            
                                  <div class="container text-center">
                                            <div class="row">
                                            <div class="col-sm-4">
                                                                    <div className='img-circle' src={require('../images/img-history.jpg')} alt ="image"  ></div>
                                                            
                                                            <h2> history :</h2>

                                                                <div>
                                                                    <p> La Belle Company was established in 2019. During this period, we have been able to develop our website so that we can rent bridal dresses remotely, with good quality and great trust between us,
                                                                                        During this period, and with the spread of Corona disease, the demand increased through our website for renting dresses, to be a helpful factor in identifying us by the community</p>
                                                        
                                                                </div>             
                                                     </div>
                                                </div>

                                            <div class="row">
                                                <div class="col-sm">
                                                                             
                                                    <div className = 'img-circle-our-features' src = {require('../images/img- Our features.jpg')} alt ="image"  ></div>
                                                    
                                                        <h2>  Our features :</h2>
                       
                                                           <div>
                                                             <p>
                                                                   We save time and effort and ease of booking and receiving the order.
                                                                       There is ease in booking with complete clarity with Tfaasy. Also, there are a large number of options available from different designs and prices, and we provide all the needs of the bride from one place and with the click of a button, and we have easy electronic payment methods for everyone</p>
                                                           </div>
                                                 </div>
                                            </div>
                                        </div>



                                     <div>
                                            <h2 className='padd'>Our team member </h2>

                                            <div className='row ' > 
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