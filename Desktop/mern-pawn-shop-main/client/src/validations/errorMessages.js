export const isRequired = (fieldName) => `${fieldName} is required.`;
export const hasMinLength = (fieldName, minLength) => `${fieldName} has minimum length of ${minLength} symbols.`;
export const hasMaxLength = (fieldName, maxLength) => `${fieldName} has maximum length of ${maxLength} symbols.`;
export const containsSmallLetter = (fieldName) => `${fieldName} must contain small letter.`;
export const containsCapitalLetter = (fieldName) => `${fieldName} must contain capital letter.`;
export const containsNonAlphaNumericSymbol = (fieldName) => `${fieldName} must contain non-alphanumeric symbol.`;

export const isValidEmail = "Valid E-Mail address is required.";

const errorMessages = {
    isRequired,
    hasMinLength,
    hasMaxLength,
    containsSmallLetter,
    containsCapitalLetter,
    containsNonAlphaNumericSymbol,
    isValidEmail
}

export default errorMessages;