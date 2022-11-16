import Unknown from '/Unknown';
import './Style.css';

const team = (props) => {

    return(
        
       <div>
            <div className="team">
                <div className="team_member">
                    <div className="team_img">
                        <img src={Unknown} alt="Team_image"/>
                    </div>

                        <h3>{props.name}</h3>
                        <p>{props.definition}</p>
                 
                 </div>
            </div>
        </div>
    );
    
    }
export default team 

