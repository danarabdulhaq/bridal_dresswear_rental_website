import SideBar from "./Sidebar"
import ToolBar from "./ToolBar"


const AccessoressTable=()=>{

    return (
    <>
    <ToolBar/>
            <div className="row mx-0">
            <div  className="col-2 "id='sidebar'>
                <SideBar/>
            </div>
            <div className="col-10 mx-0"id="contant">
            <h1>Accessories</h1>
            </div>
            </div>
    </>
    )
}
export default AccessoressTable