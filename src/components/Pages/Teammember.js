import './Style_aboutus.css';
import Unknown from './Unknown.jpg';

const team = (props) => {

    return(
        

        <div class="team-card" >
        <img src={Unknown}class="team-card-img" alt="person"/>
        <div class="team-card-info">
                <h4>{props.name}</h4>
                    <p>{props.identification}</p>


        </div>
      </div>
    );
    
    }
export default team