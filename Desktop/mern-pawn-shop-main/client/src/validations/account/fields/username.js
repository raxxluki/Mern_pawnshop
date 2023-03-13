import * as yup from "yup";
import {isRequired, hasMinLength, hasMaxLength} from "../../errorMessages";

const constants = {
    fieldName: "Username",
    minLength: 8,
    maxLength: 48
}

const username = yup.string()
    .min(constants.minLength, hasMinLength(constants.fieldName, constants.minLength))
    .max(constants.maxLength, hasMaxLength(constants.fieldName, constants.maxLength))
    .required(isRequired(constants.fieldName));

export default username;