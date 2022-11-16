import './Register-btn.css'


const Btn =(props)=>
{
  const title =(props.title)? props :"Login"

    return(
        <div className="pt-1 mb-4">
        <button className="btn  btn-lg btn-block" type="button" id="registerBtn">{title}</button>
      </div>);
}
export default Btn;