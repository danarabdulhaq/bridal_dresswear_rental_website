import SideBar from "./Sidebar"
import ToolBar from "./ToolBar"
import MassagesData from "../Data/ContactUsData"


const Massages=()=>{
    return(
        <>
<ToolBar/>
            <div className="row mx-0">
            <div  className="col-2 "id='sidebar'>
                <SideBar/>
            </div>
            <div className="col-10 mx-0"id="contant">
            <h4>Massages from Contact Us page</h4>
            <table class="table">
    <thead>       
        <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Phone</th>
        <th scope="col">Email</th>
        <th scope="col">Massages</th>
    </tr>
    </thead>
    <tbody class="table-group-divider">
        {MassagesData.map((value,key)=>{
            return(
                <tr key={(key)}>
                <td>{key+1}</td>
                <td>{value.name}</td>
                <td>{value.phone}</td>
                <td>{value.email}</td>
                <td>{value.text}</td>
                </tr>
            )
        })}
    </tbody>
</table>
            </div>
            </div>
        </>
    )
}

export default Massages