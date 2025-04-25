import "../style/Button.css";
function Button({type, text, form}){
    return(
        <button type= {type} className="btn" form={form}>{text || "Button"}</button>
    )
}

export default Button;