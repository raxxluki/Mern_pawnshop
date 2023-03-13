import {Link} from "react-router-dom";
import "./NavLinks.css";

const NavLinks = ({links}) => {
    const mappedLinks = links.map(l =>
        <li className="nav-links-li"
            key={l.url}>
            <Link to={l.url} className="nav-links-link">{l.text}</Link>
        </li>)

    return <div className="nav-links-container">
        {
            links.length > 0 &&
            <ul className="nav-links-ul">
                {mappedLinks}
            </ul>
        }
    </div>
}

export default NavLinks;