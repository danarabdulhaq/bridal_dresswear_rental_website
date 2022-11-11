//imports
import Add_btn from "./Add_btn"
import Add_img1 from "./Add_img1";
import Add_img2 from "./Add_img2";
import Add_img3 from "./Add_img3";

//function
const Card = () => {
  return (
<div className="card-group"style={{ margin: `50px`, display: `flex`, flexDirection: "row", justifyContent: "center" }}>
  <div class="card">
    <Add_img1/>
    <div className="card-body">
    <Add_btn/>
    </div> 
  </div>
  <div className="card">
    <Add_img2/>
    <div className="card-body">
    <Add_btn/>
    </div>
  </div>
  <div className="card">
    <Add_img3/>
    <div className="card-body">
    <Add_btn/>
    </div>
  </div>
</div>

);
};

//Export
 export default Card