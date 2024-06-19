import "./Component.css";
function Component({img,title,description}){
    return(
        <li>
            <img src={img} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}
export default Component;