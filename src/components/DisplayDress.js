import ProductCard from './ProductCard/ProductCard';


import './DisplayDress.css';

import chiffon_dress from './Product_photos/chiffon_dress.jpg';
import fluffy_dress from './Product_photos/fluffy_dress.jpg';
import High_neck_dress from './Product_photos/High_neck_dress.jpg';
import maria_dress from './Product_photos/maria_dress.jpg';
import midriff from './Product_photos/midriff.jpg';
import One_shoulder_dresses from './Product_photos/One_shoulder_dresses.jpg';
import Puffed_sleeves from './Product_photos/Puffed_sleeves.jpg';
import white_dantiel from './Product_photos/white_dantiel.jpg';




const DisplayDress= () =>{


const my_Data = [{img :  chiffon_dress ,  name : "chiffon dress" , details : " size : m  | The number of rental times : 2  " ,  price : "1500" },
                { img :  fluffy_dress ,   name : "fluffy dress" ,  details : " size : xs  | The number of rental times : 3  " ,  price : " 1400 "},
                {img :   High_neck_dress, name : "High neck dress", details : " size : s  | The number of rental times : 2 " , price : "1600"},
                {img :   maria_dress ,     name :"maria dress" ,    details : " size : l  | The number of rental times : 5  " , price : "1555"},
                {img :   midriff ,         name :'midriff' ,        details : " size : m  | The number of rental times : 4 " ,  price : "1300"},
                {img :   One_shoulder_dresses, name :" One shoulder dresses", details : " size : m  | The number of rental times : 0 " , price : "1800"},
                {img :   Puffed_sleeves ,      name :" Puffed sleeves" ,      details : " size : xl  | The number of rental times : 2  " , price : "1500" },
                {img :   white_dantiel ,       name :" white dantiel dress" , details : "size : m  | The number of rental times : 2  " , price : "1200" }]

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

export default DisplayDress ;