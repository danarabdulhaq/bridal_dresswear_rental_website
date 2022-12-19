





const TextBox = (props) => {

    return(
        
            <div className="form-floating mb-3">
                <input  className="form-control" id="floatingInput" />
                <label for="floatingInput">{props.title}</label>
            </div>
        
        
    );
}




export default TextBox;
