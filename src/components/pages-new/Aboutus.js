import './Aboutus.css';
import Teammember from './Team_member';
import 'animate.css';
import React from 'react';

const Aboutus  = () =>{

return (

<>

<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={require('./rings-wedding.jpg')} className ="d-block w-100" alt="sorry" />
    </div>
  </div>
</div>

<div className='container'>

        <div>
              <h1 className='ourhis'>We were born in Palestine</h1>
              <p className='labelle_history'> <span className='labelle_about' >La Belle </span> Company was established in 2019. During this period, we have been able to develop our website so that we can rent bridal dresses remotely, with good quality and great trust between us,
                  During this period, and with the spread of Corona disease, the demand increased through our website for renting dresses, to be a helpful factor in identifying us by the community.</p>
        </div>

<img className='display_img_about img-fluid' src={require('./design_about.jpg')}  alt="sorry" />

            <div>
                <h1 className="ourfeat">  Our features </h1>                      
                <p className="labelle-feature">We save time and effort and ease of booking and receiving the order. There is an ease of reservation with complete clarity and details. There are also a large number of options available from different designs and prices , and we provide all the needs of the bride in one place and at the click of a button.</p>
            </div>


<div className='display_logo'>
            <img className=' img-fluid ' src={require('./labell.jpeg')}  alt="sorry" />
              <p className='Conclusion'>The beautiful bride, we are here to serve you and provide what you need in the best way, and to save the price of buying the dress, rent it from us</p>
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

</>
  

);

}



export default Aboutus