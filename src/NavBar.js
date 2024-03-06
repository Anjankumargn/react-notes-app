import { Link } from "react-router-dom";
const NavBar=()=>{
    return(
    <nav>
        <ul>
            <li>
                <Link to ="/">Login</Link>
            </li>
            <li>
                <Link to ="/notes">Notes</Link>
            </li>
            <li>
                <Link to ="/dummy">Dummy</Link>
            </li>
            
        </ul>
    </nav> 
)
}
export default NavBar;