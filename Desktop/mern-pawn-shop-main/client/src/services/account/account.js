import {deleteRequest, postRequest} from "../requests/requests";
import requests from "./requestUrls";

export const register = async (model) => {
    try {
        return await postRequest(requests.register, {}, model);
    } catch (err) {
        throw err;
    }
}

export const signIn = async (model) => {
    try {
        return await postRequest(requests.signIn, {}, model);
    } catch (err) {
        throw err;
    }
}

export const signOut = async (model) => {
    try {
        return await postRequest(requests.signOut, {}, model);
    } catch (err) {
        throw err;
    }
}

export const changeUsername = async (model) => {
    try {
        return await postRequest(requests.changeUsername, {}, model);
    } catch (err) {
        throw err;
    }
}

export const changeEmail = async (model) => {
    try {
        return await postRequest(requests.changeEmail, {}, model);
    } catch (err) {
        throw err;
    }
}

export const changePassword = async (model) => {
    try {
        return await postRequest(requests.changePassword, {}, model);
    } catch (err) {
        throw err;
    }
}

export const remove = async () => {
    try {
        const validationHash = await deleteRequest(requests.remove, {});
        return await deleteRequest(requests.remove, {}, validationHash);
    } catch (err) {
        throw err;
    }
}

const account = {
    register,
    signIn,
    signOut,
    changeUsername,
    changeEmail,
    changePassword
}

export default account;