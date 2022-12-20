import ProductCard from '../ProductCard/ProductCard';
import './DisplayFlowers.css' ;
import my_data from './DataForFlowers';
import './DataForFlowers';
import url from './photo/flowerheader.jpg';


const DisplayFlowerss  =()=>{
    return(
       <>
                         <div className="carousel slide" data-bs-ride="carousel">
                         <div className="carousel-inner">
                             <div className="carousel-item active">
                             <img src={url} className="d-block w-100 " alt="wait please"/>
                             <div className='container '>
                             <h2 className=' header-products'>Our Products</h2>
                             <p className='introduction-to-our-products'>Having a beautiful bouquet adorning 
                             your hands is essential to complement your beautiful look, 
                             so we provided you with various bouquets of roses of various designs and prices. </p><p className='labelletext'>LA BELLE .</p>
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
 
 export default DisplayFlowerss ;