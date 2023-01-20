import SideBar from "./Sidebar";
import ToolBar from "./ToolBar";
import { useRef,useState } from "react";
import './Admin.css'

const HomeEdit=()=>{
    
    const [slide,setSlide]= useState([localStorage.getItem('slider')]);
    
    const [flower,setFlower]=useState(localStorage.getItem('flowerImg'));
    const [accessories,setAccessories]=useState(localStorage.getItem('AccessImg'));
    const [dress,setDress]=useState(localStorage.getItem('DressImg'));
const handelClick=(e)=>{
    
        localStorage.setItem('slider',slide);
        localStorage.setItem('flowerImg',flower)
        localStorage.setItem('DressImg',dress)
        localStorage.setItem('AccessImg',accessories)
    
}

const slideHandleChange=(e)=> {
    console.log(e.target.files);
    setSlide(URL.createObjectURL(e.target.files[0]));
}
const accessoriesHandleChange=(e)=> {
    console.log(e.target.files);
    setAccessories(URL.createObjectURL(e.target.files[0]));
}
const dressHandleChange=(e)=> {
    console.log(e.target.files);
    setDress(URL.createObjectURL(e.target.files[0]));
}
const flowerHandleChange=(e)=> {
    console.log(e.target.files);
    setFlower(URL.createObjectURL(e.target.files[0]));
}

    return (
        <>
        <ToolBar/>
            <div className="row mx-0">
            <div  className="col-2 "id='sidebar'>
                <SideBar/>
            </div>
            <div className="col-10 mx-0"id="contant">
            
            <img src={ slide } className="img-thumbnail my-5 mx-4" id="slide" alt="..."></img>

                <input type='file' accept="image/*"onChange={slideHandleChange}/>
                <br/>

                <div class="container text-center">
  <div class="row align-items-center">
    <div class="col">
    <img src={flower} className="img-thumbnail"id='productImage' alt="..."></img>
    <label>flower image</label>
                <input type='file' accept="image/*"onChange={flowerHandleChange}/>

    </div>
    <div class="col">
    <img src={dress} className="img-thumbnail"id='productImage' alt="..."></img>
    <label>dress image</label>
    <input type='file' accept="image/*"onChange={dressHandleChange}/>
    </div>
    <div class="col">
    <img src={accessories}className="img-thumbnail"id='productImage' alt="..."></img>
    <label>accessories image</label>
    <input type='file' accept="image/*"onChange={accessoriesHandleChange}/>
    </div>
  </div>
</div>
                <br/>
                <div>
                
                
                
                </div>
                <button className="btn my-5" onClick={handelClick}>accept changes</button>
                <br/>
            </div>
            </div>
        </>
    )
}
export default HomeEdit;