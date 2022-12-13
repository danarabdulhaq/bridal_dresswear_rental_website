import'./Button.css'
import {  Link } from "react-router-dom";


const Btn=(props)=>{

return(
    <button className="about-me">
  <span className="circle">
<span className="icon arrow"></span>
  </span>
  <span className="button-text">{props.way}</span>
  <Link to={props.Link}></Link>
</button>
)


}
export default Btn;