import ProductCard from './ProductCard/ProductCard';


import './DisplayDress.css';

import fa from '../components/Flower/photo/fa.jpg';
import fc from '../components/Flower/photo/fc.jpg';
import fd from '../components/Flower/photo/fd.jpg';
import fe from '../components/Flower/photo/fe.jpg';
import ff from '../components/Flower/photo/ff.jpg';
import fg from '../components/Flower/photo/fg.jpg';
import fh from '../components/Flower/photo/fh.jpg';
import fi from '../components/Flower/photo/fi.jpg';



const DisplayFlower= () =>{


        const my_Data =   [{img :  fa ,  name : "Pink & White Bouquet" , details : " size : s  " ,  price : "70" },
                        { img :  fc ,  name : "Pink  Bouquet" , details : " size : s " ,  price : "100" },
                        {img :  fd ,  name : "Pink & Green Bouquet" , details : " size : s   " ,  price : "350" },
                        {img :  fe ,  name : "Blue & White Bouquet" , details : " size : s   " ,  price : "80" },
                        {img :  ff ,  name : "Pink & White Bouquet" , details : " size : s  " ,  price : "40" },
                        {img :  fg ,  name : "Green & White Bouquet" , details : " size : s   " ,  price : "100" },
                        {img :  fh ,  name : " White Bouquet" , details : " size : s  " ,  price : "100" },
                        {img :  fi ,  name : "Pink  Green& White Bouquet" , details : " size : s   " ,  price : "60" },]

                        return(

                                <div>

                                    {

                                    my_Data.map((item , index )=> {

                                        return(
                                            <ProductCard key = {index} img = {item.img} name = {item.name} details = {item.details} price = {item.price} />
                                        )
                                        
                                    })

                                  

                                           


                                    }

                                </div>


    );
}

export default DisplayFlower ;