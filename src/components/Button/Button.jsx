import "./Button.css"
function Button({title,isSelected, onSelect}){
    return(
        <button className={isSelected?"active":null} onClick={onSelect}>{title}</button>
    )
}
export default Button;