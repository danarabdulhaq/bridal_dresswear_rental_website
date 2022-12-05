import FormPic from '../Images/FormPic.jpg'
import Logo from '../Images/Logo.png'
import Btn from '../Register-btn/Register-btn';



const Form = (props)=> { 
  return(
    
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" >
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img id='formpic' src={FormPic}
                    alt="form" className="img-fluid"  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                  <div className="d-flex align-items-center mb-3 pb-1">
                  <img id="logo"src={Logo}
                    alt="" className="img-fluid"  />
                        <span className="h1 fw-bold mb-0">La belle</span>
                      </div>
                      <h5 className="fw-normal mb-3 pb-3" >{props.text}</h5>
                   {props.children}
    <Btn title="Sign In"/>
</div>
</div>
              
        </div>
        </div>
        </div>
</div>
</div>

  );
}
//export
export default Form;
