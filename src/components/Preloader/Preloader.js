
import './Preloader.css';



const Preloader = ()=> {

    return (
    
    <div className="container" id="Preloader">
        <div className="box">
    
            <div className="title">
                <div className="block1"></div>
                <h1 id='loaderHeader'>La belle<span id='dot'></span></h1>
            </div>
    
            <div className="role">
                <div className="block2"></div>
                <p id='slogan'>bridal worth it</p>
            </div>
    
        </div>
    </div>
 );
}

export default Preloader;