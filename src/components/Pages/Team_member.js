import '../Pages/Style_aboutus.css';
import Unknown from '../images/Unknown.jpg';

const team = (props) => {

    return(
        

        <div className="team-card" >
        <img src={Unknown}className ="team-card-img" alt="person"/>
        <div class="team-card-info">
                <h4>{props.name}</h4>
                    <p>{props.identification}</p>


        </div>
      </div>
    );
    
    }
export default team