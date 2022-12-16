import ProductCard from '../ProductCard/ProductCard';

import necklec from './prodectaccessories/necklec.jpg';
import Ba from './prodectaccessories/Ba.jpg'
import Ca from './prodectaccessories/Ca.jpg';
import Nk from './prodectaccessories/Nk.jpg';
import bab from './prodectaccessories/bab.jpg';
import Cd from './prodectaccessories/Cd.jpg';
import Nn from './prodectaccessories/Nn.jpg';
import Bc from './prodectaccessories/Bc.jpg';
import Cf from './prodectaccessories/Cf.jpg';
import Nz from './prodectaccessories/Nz.jpg';
import Bd from './prodectaccessories/Bd.jpg';
import Cg from './prodectaccessories/Cg.jpg';
import qrit from './prodectaccessories/qrit.jpg';
import bla from './prodectaccessories/bla.jpg';
import Cs from './prodectaccessories/Cs.jpg';
import Ra from './prodectaccessories/Ra.jpg';
import Cl from './prodectaccessories/Cl.jpg';
import Rd from './prodectaccessories/Rd.jpg';
import blan from './prodectaccessories/blan.jpg';
import Cw from './prodectaccessories/Cw.jpg';
import Rf from './prodectaccessories/Rf.jpg';
import Bn from './prodectaccessories/Bn.jpg';
import Na from './prodectaccessories/Na.jpg';
import Rg from './prodectaccessories/Rg.jpg';
import nec from './prodectaccessories/nec.jpg';
import Br from './prodectaccessories/Br.jpg';
import Rh from './prodectaccessories/Rh.jpg';
import Bt from './prodectaccessories/Bt.jpg';
import n from './prodectaccessories/n.jpg';
import Rj from './prodectaccessories/Rj.jpg';
import Rs from './prodectaccessories/Rs.jpg';
import Bx from './prodectaccessories/Bx.jpg';
import neeck from './prodectaccessories/neeck.jpg';




const Displayaccessories= () =>{


const my_Data = [{img :  necklec ,  name : "necklec" , details : " size : s  | The number of rental times : 1  " ,  price : "70" },
                {img :  Ba ,  name : "Bracelet" , details : " size : s  | The number of rental times : 2  " ,  price : "50" },
                {img :  Ca ,  name : "Crown" , details : " size : M  | The number of rental times : 0  " ,  price : "200" },
                {img :  Nk ,  name : "necklec" , details : " size : L | The number of rental times : 3  " ,  price : "70" },
                {img :  bab ,  name : "Bracelet" , details : " size : s  | The number of rental times : 2  " ,  price : "60" },
                {img :  Cd ,  name : "Crwon" , details : " size : L  | The number of rental times : 0 " ,  price : "350" },
                {img :  Nn ,  name : "necklec" , details : " size : M  | The number of rental times : 1  " ,  price : "180" },
                {img :  Bc ,  name : "bracelet" , details : " size : s  | The number of rental times : 3  " ,  price : "40" },
                {img :  Cf ,  name : "Croen" , details : " size : XL  | The number of rental times : 3  " ,  price : "250" },
                {img :  Nz ,  name : "necklec" , details : " size : L  | The number of rental times : 1  " ,  price : "300" },
                {img :  Bd ,  name : "bracelet" , details : " size : s  | The number of rental times : 2  " ,  price : "90" },
                {img :  Cg ,  name : "Crown" , details : " size : s  | The number of rental times : 1  " ,  price : "230" },
                {img :  qrit ,  name : "eng" , details : " size : M  | The number of rental times : 1  " ,  price : "130" },
                {img :  bla ,  name : "bracelet" , details : " size : s  | The number of rental times : 1  " ,  price : "80" },
                {img :  Cs ,  name : "Crown" , details : " size : s  | The number of rental times : 1  " ,  price : "170" },
                {img :  Ra ,  name : "Ring" , details : " size : s  | The number of rental times : 0  " ,  price : "30" },
                {img :  Cl ,  name : "Crown" , details : " size : s  | The number of rental times : 3  " ,  price : "120" },
                {img :  Rd ,  name : "Ring" , details : " size : s  | The number of rental times : 2  " ,  price : "100" },
                {img :  blan ,  name : "bracelet" , details : " size : s  | The number of rental times : 1  " ,  price : "90" },
                {img :  Cw ,  name : "Crwon" , details : " size : M  | The number of rental times : 0  " ,  price : "200" },
                {img :  Rf ,  name : "Ring" , details : " size : s  | The number of rental times : 1  " ,  price : "100" },
                {img :  Bn ,  name : "bracelet" , details : " size : s  | The number of rental times : 3 " ,  price : "60" },
                {img :  Na ,  name : "necklec" , details : " size : L | The number of rental times : 1  " ,  price : "390" },
                {img :  Rg ,  name : "Ring" , details : " size : M | The number of rental times : 0  " ,  price : "110" },
                {img :  Br ,  name : "bracelet" , details : " size : s  | The number of rental times : 2  " ,  price : "100" },
                {img :  nec ,  name : "necklec" , details : " size : L | The number of rental times : 4 " ,  price : "120" },
                {img :  Rh ,  name : "Ring" , details : " size : s  | The number of rental times : 1  " ,  price : "80" },
                {img :  Bt ,  name : "bracelet" , details : " size : s  | The number of rental times : 1  " ,  price : "70" },
                {img :  n,  name : "necklec" , details : " size : s  | The number of rental times : 3  " ,  price : "50" },
                {img :  Rj ,  name : "Ring" , details : " size : L  | The number of rental times : 1  " ,  price : "60" },
                {img :  Rs ,  name : "Ring" , details : " size : s  | The number of rental times : 1  " ,  price : "40" },
                {img :  Bx ,  name : "bracelet" , details : " size : s  | The number of rental times : 3  " ,  price : "50" },
                {img :  neeck ,  name : "necklec" , details : " size : s  | The number of rental times : 1  " ,  price : "70" }



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

export default Displayaccessories ;