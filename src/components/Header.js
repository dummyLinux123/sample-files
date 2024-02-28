import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <>
            <nav>
                <ul style={{display:"flex", listStyleType:"none"}}>
                    <li style={{ marginRight:"10px"}}>
                        <Link to="/page1"> Page 1</Link>
                    </li>
                    <li style={{ marginRight:"10px"}}>
                        <Link to="/page2"> Page 2</Link>
                    </li>
                </ul>
            </nav>
        </>
     );
}
 
export default Header;