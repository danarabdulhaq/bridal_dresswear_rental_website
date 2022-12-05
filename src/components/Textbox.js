

const TextBox = (props) => {

    return(
        
            <div class="form-floating mb-3">
                <input  class="form-control" id="floatingInput" />
                <label for="floatingInput">{props.title}</label>
            </div>
        
        
    );
}




export default TextBox;
