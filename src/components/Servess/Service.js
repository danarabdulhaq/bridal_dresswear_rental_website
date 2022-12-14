 import './ServiceStyle.css';
 import React from "react";


const Service =()=>{
   return(

                      
                                          
              <div className="container"> 
                      <div>       
      
                              <h1 className=' headerservice '> Our Service </h1>
                                  <h3 className="welcome">
                                  " Our beautiful la belle, we offer you our services to be the queen of your beautiful night "
                                  </h3>



                                  <div class="d-flex flex-row mb-1">
                                        <div className="p-2">

                                        <img className='img-fluid dressservice-img' src={require('./dressss.jpg')} alt ="image1"  />

                                        <div>

                                                <h2 className="tit-Dresses-rental"> Renting Dresses </h2>
                                                <p className='dresstext'> We offer you, our beauty,
                                                     the most beautiful dresses with attractive and distinctive designs,
                                                     at different prices and high quality.
                                                      Whatever your request, you will surely find it with us.</p>
                                        </div>

                                        </div>
                                        
                                        </div>


                                  <div class="d-flex flex-row-reverse">
                                        <div className="p-2">  
                                        <img className='img-fluid flowerservice-img' src={require('./flowerS.jpg')} alt ="image1"  />

                                        <div>
                                                <h2 className="tit-flower-rental"> Renting Flower Bouquets </h2>
                                                <p className='flowertext'>
                                                And to complete your look,
                                                a beautiful bouquet of roses adorns your beautiful hands, 
                                                so we provided you with different bouquets in attractive colors
                                                and unique designs.
                                                </p>
                                         </div>
                                        </div>
                                        
                                        </div>


                                    <div class="d-flex flex-row mb-3">

                                     <div className="p-2">
                                                <img className='img-fluid accessorisservice-img' src={require('./accessoriss.jpg')} alt ="image1"  />
                                                
                                                <div>
                                                                  <h2 className="tit-accessoris-rental">Accessoris Renting  </h2> 
                                                      <p className='accessoristext'>
                                                            It is necessary to have beautiful and high-end accessories
                                                            with various attractive designs, different sizes and different
                                                                  accessories such as crowns of heads, rings, neck necklaces and others,
                                                            which will add a beautiful glamorous touch that 
                                                            will make you more distinguished and brilliant.
                                                      </p>
                                                </div>
                                         </div>
                                    </div>


                                  <div class="d-flex flex-row-reverse">
                                        <div className="p-2">
                                            <img className='img-fluid deliveryservice-img' src={require('./delivery.jpg')} alt ="image1"  />

                                              <div>
                                                      <h2 className="tit-delivery-rental">   Delivery Services  </h2>  
                                                      <p className='deliverytext'>
                                                        And because your comfort is important to us, 
                                                        we have a delivery service to the door of the house or to a delivery point of your choice,
                                                        to make it easier for you, you do not have to choose what you want, 
                                                        then set the appointment and the rest of the details,
                                                        and then your order reaches your hands
                                                      </p>


                                             </div>
                                        </div>
      
                                  </div>
                                  </div> 
                            </div>
                      
      
                  
      
          );
          
      
      }
      

 export default Service                              
