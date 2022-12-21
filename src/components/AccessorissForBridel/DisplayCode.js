import ProductCard from '../ProductCard/ProductCard.js';
import './Display.css';
import './DataForAccessoris';
import my_data from './DataForAccessoris';
import url from '../Accessoriss/photo/Cl.jpg';


const DisplayCode  =()=>{
   return(
      <>
                        <div className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={url} className="d-block w-100 " alt="wait please"/>
                            <div className='container '>
                            <h2 className=' header-products'>Our Products</h2>
                            <p className='introduction-to-our-products'>In order for your look to be more glamorous and radiant, 
                                      it is necessary to have beautiful accessories. In order for your look to be more glamorous and radiant,
                                       there must be beautiful accessories to add beauty to your beauty.
                                                            Here we provide you with the most beautiful accessories in the most
                                                            beautiful designs and various prices to suit a
                                                            measure to add beauty to your beauty
                                                            Here we provide you with the most beautiful
                                                                            accessories in 
                                                                            the most beautiful designs and different prices to suit you. </p><p className='labelletext'>LA BELLE .</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div>
                            { 

                                my_data.map((item , index )=> {

                                    return(
                                        
                                        <ProductCard key = {index} img = {item.img} name = {item.name} details = {item.details} price = {item.price} />
                                
                                    )
                                    
                                })

                        }
                    </div>

   </>
                                   );
}

export default DisplayCode ;