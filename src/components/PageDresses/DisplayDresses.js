import ProductCard from '../ProductCard/ProductCard';
import './DisplayDresses.css'
import my_Data from '../Data/DataForDresses.js';
import displayheaderforDresses from './headerDressesPage.jpg'

const DisplayDresses= () =>{


                        return(
<>
                            <div className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                         <div className="carousel-item active">
                                        <img src={displayheaderforDresses} className="d-block w-100 " alt="wait please"/>
                                        <div className='container '>
                                        <h2 className=' header-products'>Our Products</h2>
                                        <p className='introduction-to-our-products'>Wedding dresses are the centerpiece of your wedding day and there are thousands of choices and styles, so making the right choice can seem impossible. If you want to be sure you are satisfied with both the price and appearance of your gown then shop the designer wedding dress collections at </p><p className='labelletext'>LA BELLE .</p>
                                        </div>
                                    </div>
                                    </div>
                             </div>

                                   <div className='container'>
                                    <div className='row'>
                                           { 

                                            my_Data.map((item , index )=> {

                                                return(
                                                    
                                                    <ProductCard key = {index} img = {item.url} name = {item.name} details = {item.details} price = {item.price} />
                                            
                                                )
                                                
                                            })

                                    }
                                </div>
</div>
       </>
    );
}

export default DisplayDresses ;