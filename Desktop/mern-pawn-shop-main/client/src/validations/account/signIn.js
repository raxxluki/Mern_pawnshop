import * as yup from "yup";
import {isRequired} from "../errorMessages";

const constants = {
    identifierFieldName: "Identifier",
    passwordFieldName: "Password"
}

const signIn = yup.object().shape({
    identifier: yup.string().required(isRequired(constants.identifierFieldName)),
    password: yup.string().required(isRequired(constants.passwordFieldName))
});

export default signIn;