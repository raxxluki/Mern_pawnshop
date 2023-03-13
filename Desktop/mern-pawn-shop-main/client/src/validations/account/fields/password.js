import * as yup from "yup";
import {hasMaxLength, hasMinLength, isRequired} from "../../errorMessages";

const constants = {
    fieldName:"Password",
    minLength:8,
    maxLength: 64
}

const password = yup.string()
    .min(constants.minLength, hasMinLength(constants.fieldName, constants.minLength))
    .max(constants.maxLength, hasMaxLength(constants.fieldName, constants.maxLength))
    .required(isRequired(constants.fieldName));

export default password;