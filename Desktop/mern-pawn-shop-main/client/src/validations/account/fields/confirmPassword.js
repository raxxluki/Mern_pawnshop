import * as yup from "yup";

const constants = {
    fieldName:"ConfirmPassword",
    passwordFieldName:"password"
}

const confirmPassword = yup.string()
    .oneOf([yup.ref(constants.passwordFieldName), null], 'Passwords must match');

export default confirmPassword;