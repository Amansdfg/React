import reactLogo from "../../assets/react-core-concepts.png";
import "./Header.css";
function Header(){
    return(
        <header>
            <img src={reactLogo} alt="React logo"/>
            <h1>React Essentials</h1>
            <p>4 fundamental concepts every React developer must undestand</p>
        </header>
    )
}
export default Header;