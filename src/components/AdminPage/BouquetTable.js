import SideBar from "./Sidebar"
import ToolBar from "./ToolBar"



const BouquetTable=()=>{
    return(
        <>
        <ToolBar/>
        <div className="row mx-0">
                        <SideBar/>
            <div className="col">
                        <h1>bouq</h1>
</div>

        

        </div>
        </>
    )
}

export default BouquetTable