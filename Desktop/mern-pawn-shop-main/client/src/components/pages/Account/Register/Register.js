import {Link} from "react-router-dom";
import {Summary} from "../../../common/forms";

const Register = () => {
    return <>
        <h1>Register account page</h1>
        <Summary text=""/>
        <Link to="/account/login">Sign in, if you are already registered.</Link>
    </>
}

export default Register;