import * as yup from "yup";
import {isRequired, isValidEmail} from "../../errorMessages";

const constants = {
    fieldName : "E-Mail"
}

const email = yup.string()
    .email(isValidEmail)
    .required(isRequired(isRequired(constants.fieldName)));

export default email;