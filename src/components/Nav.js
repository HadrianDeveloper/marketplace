import { Link } from "react-router-dom";

export default function Nav() {

    return (
        <nav>
            <Link to='/electronics' >Electronics</Link>
            <Link to='/household' >Household</Link>
            <Link to='/clothing' >Clothing</Link>
        </nav>
    )

};