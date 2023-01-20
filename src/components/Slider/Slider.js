import "./Slider.css";


const Slider = ()=> {
  return(
      <div>
  <div  className="carousel slide " data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="5000">
        <img src={localStorage.getItem('slider')} className="d-block w-100" alt="..."/>
      </div>
    </div>
  </div>
  </div>
  
  );
  }
  
  export default Slider;