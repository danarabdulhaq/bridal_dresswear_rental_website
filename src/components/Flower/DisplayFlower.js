

import ProductCard from '../ProductCard/ProductCard';
import fa from './photo/fa.jpg';
import fc from './photo/fc.jpg';
import fd from './photo/fd.jpg';
import fe from './photo/fe.jpg';
import ff from './photo/ff.jpg';
import fg from './photo/fg.jpg';
import fh from './photo/fh.jpg';
import fi from './photo/fi.jpg';
import fj from './photo/fj.jpg';
import fk from './photo/fk.jpg';
import fo from './photo/fo.jpg';
import fp from './photo/fp.jpg';
import fq from './photo/fq.jpg';
import fr from './photo/fr.jpg';
import fs from './photo/fs.jpg';
import ft from './photo/ft.jpg';
import fu from './photo/fu.jpg';
import fv from './photo/fv.jpg';
import fw from './photo/fw.jpg';
import fx from './photo/fx.jpg';
import fy from './photo/fy.jpg';
import fz from './photo/fz.jpg';
const DisplayFlower= () =>{

const my_Data = [{img :  fa ,  name : "Pink & White Bouquet" , details : " size : s | The number of rental times : 1  " ,  price : "70" },
                {img :  fc ,  name : "Pink  Bouquet" , details : " size : s  | The number of rental times : 1  " ,  price : "100" },
                {img :  fd ,  name : "Pink & Green Bouquet" , details : " size : s  | The number of rental times : 3  " ,  price : "350" },
                {img :  fe ,  name : "Blue & White Bouquet" , details : " size : s  | The number of rental times : 1  " ,  price : "80" },
                {img :  ff ,  name : "Pink & White Bouquet" , details : " size : s  | The number of rental times : 4  " ,  price : "40" },
                {img :  fg ,  name : "Green & White Bouquet" , details : " size : s  | The number of rental times : 1  " ,  price : "100" },
                {img :  fh ,  name : " White Bouquet" , details : " size : s  | The number of rental times : 1  " ,  price : "100" },
                {img :  fi ,  name : "Pink  Green& White Bouquet" , details : " size : s  | The number of rental times : 1  " ,  price : "60" },
                {img :  fj,  name : "Blue & BabyGreen Bouquet" , details : " size : s  | The number of rental times : 1  " ,  price : "100" },
                {img :  fk ,  name : "Red Bouquet" , details : " size : s  | The number of rental times : 0  " ,  price : "150" },
                {img :  fo ,  name : " White Bouquet" , details : " size : s  | The number of rental times : 1  " ,  price : "140" },
                {img :  fp ,  name : "Pink & BabyGreen Bouquet" , details : " size : s  | The number of rental times : 1  " ,  price : "100" },
                {img :  fq ,  name : " White Bouquet" , details : " size : s  | The number of rental times : 2  " ,  price : "100" },
                {img :  fr ,  name : "Pink & White Bouquet" , details : " size : s  | The number of rental times : 1  " ,  price : "120" },
                {img :  fs ,  name : "Pink & White Bouquet" , details : " size : s  | The number of rental times : 1  " ,  price : "130" },
                {img :  ft ,  name : "Pink & White Bouquet" , details : " size : s  | The number of rental times : 5 " ,  price : "100" },
                {img :  fu ,  name : "Pink & White Bouquet" , details : " size : s  | The number of rental times : 0  " ,  price : "100" },
                {img :  fv ,  name : " White Bouquet" , details : " size : s  | The number of rental times : 1  " ,  price : "100" },
                {img :  fw ,  name : "Red Bouquet" , details : " size : s  | The number of rental times : 4  " ,  price : "110" },
                {img :  fx ,  name : "Pink & White Bouquet" , details : " size : s  | The number of rental times : 1  " ,  price : "200" },
                {img :  fy ,  name : "Pink & White Bouquet" , details : " size : s  | The number of rental times : 2  " ,  price : "150" },
                {img :  fz ,  name : "Pink & White Bouquet" , details : " size : s  | The number of rental times : 1  " ,  price : "90" }


]
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