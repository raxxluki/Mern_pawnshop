import {NavLinks, NavLogo} from "./index";
import "./Header.css";

const Header = () => {
    const navLinks = [
        {
            url: "/account/signIn",
            text: "SignIn"
        }, {
            url: "/account/register",
            text: "Register"
        }
    ]

    return <header id="app-header">
        <NavLogo/>
        <NavLinks links={navLinks}/>
    </header>
}

export default Header;