import * as yup from "yup";
import {username, email, password, confirmPassword} from "./fields";

const register = yup.object().shape({
    username,
    email,
    password,
    confirmPassword
});

export default register;