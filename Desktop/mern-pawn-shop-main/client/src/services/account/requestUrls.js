import {apiBaseUrl} from "../requests/requestUrls";

export const accountBaseUrl = `${apiBaseUrl}/account`;

const requests = {
    register: `${accountBaseUrl}/register`,
    signIn: `${accountBaseUrl}/signIn`,
    signOut: `${accountBaseUrl}/signOut`,
    changeUsername: `${accountBaseUrl}/changeUsername`,
    changeEmail: `${accountBaseUrl}/changeEmail`,
    changePassword: `${accountBaseUrl}/changePassword`,
    remove: `${accountBaseUrl}/remove`
}

export default requests;