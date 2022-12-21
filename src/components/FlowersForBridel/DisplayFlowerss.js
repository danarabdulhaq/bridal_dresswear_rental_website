import ProductCard from '../ProductCard/ProductCard';
import './DisplayFlowers.css' ;
import '../Filter/Filter.css';
import my_data from './DataForFlowers';
import './DataForFlowers';
import url from './photo/flowerheader.jpg';
import { useEffect, useState } from "react";

const DisplayFlowerss  =()=>{

    const [filteredList, setFilteredList] = useState(my_data);
    const [selectedMix, setSelectedMix] = useState("");
    const [selectedColor, setSelectedColor] = useState();
  
    const filterByMix = (filteredData) => {

      if (!selectedMix) {
        return filteredData;
      }
  
      const filteredflowers = filteredData.filter(
        (flower) => flower.name.split(" ").indexOf(selectedMix) !== -1
      );
      return filteredflowers;
    };
  
    const filterByColor = (filteredData) => {
     
      if (!selectedColor) {
        return filteredData;
      }
  
      const filteredflowers = filteredData.filter(
        (access) => access.color === selectedColor
      );
      return filteredflowers;
    };
  

    const handleMixChange = (event) => {
      setSelectedMix(event.target.value);
    };
  

    const handleColorChange = (event) => {
      const inputColor = (event.target.id);
  
      if (inputColor === selectedColor) {
        setSelectedColor("");
      } else {
        setSelectedColor(inputColor);
      }
    };
  
    useEffect(() => {
      var filteredData = filterByMix(my_data);
      filteredData = filterByColor(filteredData);
      setFilteredList(filteredData);
    }, [selectedMix, selectedColor]);

    return(
       <>
                         <div className="carousel slide" data-bs-ride="carousel">
                         <div className="carousel-inner">
                             
                             <img src={url} className="d-block w-100 " alt="wait please"/>
                             <div className='container '>
                             <h2 className=' header-products'>Our Products</h2>
                             <p className='introduction-to-our-products'>Having a beautiful bouquet adorning 
                             your hands is essential to complement your beautiful look, 
                             so we provided you with various bouquets of roses of various designs and prices. </p><p className='labelletext'>LA BELLE .</p>
                             </div>
                         
                         </div>
                     </div>
 
                     <div className="container">
        <div className="row" id="flower-filter">
          <div className="col-12 col-md-6 col-lg-4 col-xxl-3 justify-content-center">
            <div className="type-filter">
              Mix with :
              <select className="type-filter"
                id="flower-type-input"
                value={selectedMix}
                onChange={handleMixChange}
              >
                <option value="" id='selection-option'>All</option>
                <option value="blue" id='selection-option'>Blue</option>
                <option value="pink" id='selection-option'>Pink</option>
                <option value="green" id='selection-option'>Green</option>
              </select>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 col-xxl-3 justify-content-center">
          <div id="color-options">
        <div onClick={handleColorChange}
          className="filter-option"
          id=""
        >
          All
        </div>
        <div onClick={handleColorChange}
          className={selectedColor === "white" ? "active-option" : "filter-option"}
          id="white"
        >
          White
        </div>
        <div onClick={handleColorChange}
          className={selectedColor === "red" ? "active-option" : "filter-option"}
          id="red"
        >
          Red
        </div>
        <div onClick={handleColorChange}
          className={selectedColor === "green" ? "active-option" : "filter-option"}
          id="green"
        >
          Green
        </div>
        <div onClick={handleColorChange}
          className={selectedColor === "pink" ? "active-option" : "filter-option"}
          id="pink"
        >
          Pink
        </div>
      </div>
        </div>
        </div>
      </div> 
                     
                    <div className='container'>
                                    <div className='row'>
                             { 
 
 filteredList.map((item , index )=> {
 
                                     return(
                                         
                                         <ProductCard key = {index} img = {item.url} name = {item.name} details = {item.details} price = {item.price} />
                                 
                                     )
                                     
                                 })
 
                         }
                     </div></div>
 
    </>
                                    );
 }
 
 export default DisplayFlowerss ;