import ProductCard from '../ProductCard/ProductCard';
import './DisplayDresses.css';
import '../Filter/Filter.css';
import my_Data from '../Data/DataForDresses.js';
import displayheaderforDresses from './headerDressesPage.jpg'
import { useEffect, useState } from "react";

const DisplayDresses= () =>{

    const [filteredList, setFilteredList] = useState(my_Data);
    const [selectedType, setSelectedType] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState();
  
    const filterByType = (filteredData) => {

      if (!selectedType) {
        return filteredData;
      }
  
      const filtereddresses = filteredData.filter(
        (dress) => dress.name.split(" ").indexOf(selectedType) !== -1
      );
      return filtereddresses;
    };
  
    const filterBySize = (filteredData) => {
     
      if (!selectedSize) {
        return filteredData;
      }
  
      const filtereddresses = filteredData.filter(
        (dress) => dress.details.split(" ").indexOf(selectedSize) !== -1
      );
      return filtereddresses;
    };
  
    const filterByColor = (filteredData) => {
     
      if (!selectedColor) {
        return filteredData;
      }
  
      const filtereddresses = filteredData.filter(
        (derss) => derss.color === selectedColor
      );
      return filtereddresses;
    };
  

    const handleTypeChange = (event) => {
      setSelectedType(event.target.value);
    };
  

    const handleSizeChange = (event) => {
      setSelectedSize(event.target.value);
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
      var filteredData = filterByType(my_Data);
      filteredData = filterByColor(filteredData);
      filteredData = filterBySize(filteredData);
      setFilteredList(filteredData);
    }, [selectedType, selectedColor, selectedSize]);
  
                        return(
<>
                            <div className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                   
                                        <img src={displayheaderforDresses} className="d-block w-100 " alt="wait please"/>
                                        <div className='container '>
                                        <h2 className=' header-products'>Our dresses</h2>
                                        <p className='introduction-to-our-products'>Wedding dresses are the centerpiece of your wedding day and there are thousands of choices and 
                                        styles, so making the right choice can seem impossible. If you want to be sure you are satisfied with both the price and appearance
                                         of your gown then shop the designer wedding dress collections at </p><p className='labelletext'>LA BELLE .</p>
                                        </div>
                                    
                                    </div>
                             </div>

 <div className="container">
        <div className="row" id="filter">
          <div className="col-12 col-md-6 col-lg-4 col-xxl-3 justify-content-center">
            <div className="type-filter">
              Material :
              <select className="type-filter"
                id="type-input"
                value={selectedType}
                onChange={handleTypeChange}
              >
                <option value="" id='selection-option'>All</option>
                <option value="chiffon" id='selection-option'>chiffon</option>
                <option value="satin" id='selection-option'>Satin</option>
                <option value="lace" id='selection-option'>Lace</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xxl-3 justify-content-center">
            <div className="type-filter">
              <div>Size :</div>
              <select
                id="type-input"
                value={selectedSize}
                onChange={handleSizeChange}
              >
                <option value="" id='selection-option'>All</option>
                <option value="XS" id='selection-option'>XS</option>
                <option value="S" id='selection-option'>S</option>
                <option value="M" id='selection-option'>M</option>
                <option value="L" id='selection-option'>L</option>
                <option value="XL" id='selection-option'>XL</option>
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
          className={selectedColor === "beige" ? "active-option" : "filter-option"}
          id="beige"
        >
          beige
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
                                                    

                                                    <ProductCard key = {index} img = {item.url} name = {item.name} details = {item.details} price = {item.price} descri={item.descri}/>
                                            

                                                )
                                            })

                                    }
                                </div>
</div>
       </>
    );
}

export default DisplayDresses ;