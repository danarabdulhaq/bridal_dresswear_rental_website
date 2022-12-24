const Table=(props)=>{
    return(
    <table className="table table-striped">
        <tr  className="bg">
            <th>Name</th>
            <th>details</th>
            <th>Color</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
        <tbody id="myTable">
         {props.children}
        </tbody>
    </table>
    );
    }
    export default Table;