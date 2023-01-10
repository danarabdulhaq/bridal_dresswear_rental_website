import ProductCard from '../ProductCard/ProductCard.js';
import './Display.css';
import '../Filter/Filter.css';
import my_data from './DataForAccessoris';

import url from '../Accessoriss/photo/headeracc.jpg';

import { useEffect, useState } from "react";
import Navbar from '../Navbar/Navbar.js';
import Footer from '../Footer/Footer.js';

const DisplayCode  =()=>{

    const [filteredList, setFilteredList] = useState(my_data);
    const [selectedType, setSelectedType] = useState("");
    const [selectedColor, setSelectedColor] = useState();
  
    const filterByType = (filteredData) => {

      if (!selectedType) {
        return filteredData;
      }
  
      const filtereddresses = filteredData.filter(
        (access) => access.name.split(" ").indexOf(selectedType) !== -1
      );
      return filtereddresses;
    };
  
    const filterByColor = (filteredData) => {
     
      if (!selectedColor) {
        return filteredData;
      }
  
      const filtereddresses = filteredData.filter(
        (access) => access.color === selectedColor
      );
      return filtereddresses;
    };
  

    const handleTypeChange = (event) => {
      setSelectedType(event.target.value);
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
      var filteredData = filterByType(my_data);
      filteredData = filterByColor(filteredData);
      setFilteredList(filteredData);
    }, [selectedType, selectedColor]);

   return(
      <>
      <Navbar/>
                        <div className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            
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

<div className="container">
        <div className="row" id="filter">
          <div className="col-12 col-md-6 col-lg-4 col-xxl-3 justify-content-center">
            <div className="type-filter">
              Type :
              <select className="type-filter"
                id="type-input"
                value={selectedType}
                onChange={handleTypeChange}
              >
                <option value="" id='selection-option'>All</option>
                <option value="necklace" id='selection-option'>Necklace</option>
                <option value="bracelet" id='selection-option'>Bracelet</option>
                <option value="earings" id='selection-option'>Earings</option>
                <option value="crown" id='selection-option'>Crown</option>
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
          className={selectedColor === "gold" ? "active-option" : "filter-option"}
          id="gold"
        >
          Gold
        </div>
        <div onClick={handleColorChange}
          className={selectedColor === "silver" ? "active-option" : "filter-option"}
          id="silver"
        >
          Silver
        </div>
        <div onClick={handleColorChange}
          className={selectedColor === "golden rose" ? "active-option" : "filter-option"}
          id="golden rose"
        >
          GoldenRose
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
                                        
                                        <ProductCard key = {index} img = {item.url} name = {item.name} details = {item.details} price = {item.price} descri={item.descri} />
                                
                                    )
                                    
                                })

                        }
                    </div></div>
                          <Footer/>
   </>
                                   );
}

export default DisplayCode ;