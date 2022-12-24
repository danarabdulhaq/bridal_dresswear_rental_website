




const Table=(props)=>{

return(
<table class="table table-striped">
    <tr  class="bg">
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