export const getRegisterModel = (username, email, password, confirmPassword) => {
    return {
        username,
        email,
        password,
        confirmPassword
    }
}

export const getSignInModel = (identifier, password, rememberMe) => {
    return {
        identifier,
        password,
        rememberMe
    }
}

export const getChangeUsernameModel = (username, password) => {
    return {
        username,
        password
    }
}

export const getChangeEmailModel = (email, password) => {
    return {
        email,
        password
    }
}

export const getChangePasswordModel = (currentPassword, password, confirmPassword) => {
    return {
        currentPassword,
        password,
        confirmPassword
    }
}

const accountMappers = {
    getRegisterModel,
    getSignInModel,
    getChangeUsernameModel,
    getChangeEmailModel,
    getChangePasswordModel
}

export default accountMappers;