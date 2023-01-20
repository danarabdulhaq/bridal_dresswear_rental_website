import SideBar from "./Sidebar";
import ToolBar from "./ToolBar"
import './Admin.css'
const Admin =()=>{
return(
<>
<ToolBar/>
            <div className="row mx-0">
            <div  className="col-2 "id='sidebar'>
                <SideBar/>
            </div>
            <div className="col-10 mx-0"id="contant">
                <h1>this pages isn't responsive yet recommend ues pc</h1>
            </div>
            </div>
</>
);


}

export default Admin