import './Register-btn.css'


const Btn =(props)=>
{
  

    return(
        <div className="pt-1 mb-4">
        <button className="btn  btn-lg btn-block" type="button" id="registerBtn">{props.title}</button>
      </div>);
}
export default Btn;

