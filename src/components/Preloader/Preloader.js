
import './Preloader.css';



const Preloader = ()=> {

    return (
    
    <div className="container">
        <div className="box">
    
            <div className="title">
                <div className="block1"></div>
                <h1 id='loaderHeader'>La belle<span id='dot'></span></h1>
            </div>
    
            <div className="role">
                <div className="block2"></div>
                <p id='slogan'>The place you need</p>
            </div>
    
        </div>
    </div>
 );
}

export default Preloader;