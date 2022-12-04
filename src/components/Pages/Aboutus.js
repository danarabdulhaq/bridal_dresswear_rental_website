import React from "react";
import './Style_aboutus.css';

import Teammember from './Teammember';

//i try to put d-flex but it dosn't work 

const About = () => {


    return(
                
                                    
        <div className="container"> 
                <div className='border-for-about padd'>       
                        <h1 className='tithead'>About us</h1>
                            <h3>
                            " Welcome dear La Belle , We hope to gain your trust Get to know us "
                            </h3>
                            
                            <img className=" img-circle-head img-fluid"  src={require('./Display_dresse.jpg')} alt="" />

                                            
                                  <div className="container text-center padd ">
                                         <div className ="row-abuotus">
                                            <div className ="col-sm-4 pb-1">
                                                                    <img className='img-circle img-fluid' src={require('./img-history.jpg')} alt ="image1"  />
                                                            


                                                                <div>
                                                                <h2 className="tit-his"> History :</h2>

                                                                    <p className="text-l" > La Belle Company was established in 2019. During this period, we have been able to develop our website so that we can rent bridal dresses remotely, with good quality and great trust between us,
                                                                                        During this period, and with the spread of Corona disease, the demand increased through our website for renting dresses, to be a helpful factor in identifying us by the community</p>
                                                        
                                                                </div>             
                                                     </div>
                                                </div>

                                            <div className="row-abuotus ">
                                                <div className ="col-sm pb-1">
                                                                             
                                                    <img className='img-circle-our-features img-fluid' src={require('./img- Our features.jpg')} alt ="image2"  />
                                                    
                                                      

                                                           <div>
                                                           <h2 className="tit-fec">  Our features :</h2>

                                                                    <p className="text-r">
                                                                        We save time and effort and ease of booking and receiving the order.
                                                                       There is ease in booking with complete clarity with Tfaasy. Also, there are a large number of options available from different designs and prices, and we provide all the needs of the bride from one place and with the click of a button, and we have easy electronic payment methods for everyone</p>
                                                           </div>
                                                 </div>
                                            </div>
                                        </div>



                                     <div>
                                            <h2 className='padd'>Our team member </h2>

                                            <div className='row rowCard' > 
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