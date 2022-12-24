
import './css/ImageDash.css';



const TableFill=(props)=>{

return ( 
                                            
<tr>
							<td ><img src={props.url} id="photo"></img>&ensp;{props.name}</td>
							<td>{props.details}</td>
                            <td>{props.color}</td>
							<td><b>$</b>{props.price}</td>
                            <td><button class="btn btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-edit"></i></button> <button class="btn btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></button></td>
					  </tr>                                 
 
);


}

export default TableFill ;