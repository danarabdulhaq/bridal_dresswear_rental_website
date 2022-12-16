import ProductCard from './ProductCard';
import neck from './prodectaccessories/neck.jpg';
import necklec from './prodectaccessories/necklec.jpg';
import bracelet from './prodectaccessories/bracelet.jpg';
import qrit from './prodectaccessories/qrit.jpg';
import tage from './prodectaccessories/tage.jpg';
import taggee from './prodectaccessories/taggee.jpg';
import ringgg from './prodectaccessories/ringgg.jpg';
import ring from './prodectaccessories/ring.jpg';





const Displayaccessories= () =>{


const my_Data = [{img :  necklec ,  name : "necklec" , details : " size : s  | The number of rental times : 1  " ,  price : "70" },
                { img :  neck ,   name : "necklec" ,  details : " size : xs  | The number of rental times : 2  " ,  price : " 80 "},
                {img :   bracelet, name : "bracelet", details : " size : s  | The number of rental times : 4 " , price : "60"},
                {img :   qrit ,     name :"earring" ,    details : " size :s l  | The number of rental times : 2  " , price : "50"},
                {img :   tage ,         name :'Crown' ,        details : " size : m  | The number of rental times : 1 " ,  price : "300"},
                {img :   taggee, name :"Crown", details : " size : m  | The number of rental times : 0 " , price : "250"},
                {img :   ringgg ,      name :" Ring" ,      details : " size : m  | The number of rental times : 2  " , price : "100" },
                {img :   ring ,       name :" Ring" , details : "size : s  | The number of rental times : 5 " , price : "130" }]

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