const reqMode = 'same-origin'; // no-cors, *cors, same-origin
const reqCache = "default"; // *default, no-cache, reload, force-cache, only-if-cached
const reqCredentials = 'same-origin'; // include, *same-origin, omit
const reqRedirect = 'follow'; // manual, *follow, error
const reqReferrerPolicy = 'no-referrer'; // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url

const mapGetUrl = (url, queryObj) => {
    if (!queryObj || Object.entries(queryObj).length === 0) {
        return url;
    }

    const queryString = Object.keys(queryObj).reduce((result, key) => {
        return [...result, `${encodeURIComponent(key)}=${encodeURIComponent(queryObj[key])}`]
    }, []).join('&');

    return `${url}?${queryString}`;
}

const getRequestOptions = (method, headers, data) => {
    if (!headers || headers.constructor !== Object) {
        headers = {};
    }

    headers['Content-Type'] = 'application/json';

    const options = {
        method,
        mode: reqMode,
        cache: reqCache,
        credentials: reqCredentials,
        headers,
        redirect: reqRedirect,
        referrerPolicy: reqReferrerPolicy
    }

    if (data) {
        options.body = JSON.stringify(data) // body data type must match "Content-Type" header
    }

    return options;
};

export const getRequest = async (url, headers = {}, queryObj) => {
    const reqUrl = mapGetUrl(url, queryObj);
    const opt = getRequestOptions("GET", headers);
    const response = await fetch(reqUrl, opt);

    if (response.ok) {
        return await response.json()
    }

    throw await response.json();
}

export const postRequest = async (url, headers = {}, body) => {
    const opt = getRequestOptions("POST", headers, body);
    const response = await fetch(url, opt);

    if (response.ok) {
        return await response.json()
    }

    throw await response.json();
}

export const putRequest = async (url, headers = {}, body) => {
    const opt = getRequestOptions("PUT", headers, body);
    const response = await fetch(url, opt);

    if (response.ok) {
        return await response.json()
    }

    throw await response.json();
}

export const deleteRequest = async (url, headers = {}, body) => {
    const opt = getRequestOptions("DELETE", headers, body);
    const response = await fetch(url, opt);

    if (response.ok) {
        return await response.json()
    }

    throw await response.json();
}

const requests = {
    getRequest,
    postRequest,
    putRequest,
    deleteRequest
}

export default requests;