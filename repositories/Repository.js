import Cookies from 'js-cookie';
import axios from 'axios';

const token = Cookies.get('id_token');
const baseDomain = 'http://127.0.0.1:8000/api';
const baseImage = 'http://127.0.0.1:8000';

export const customHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
};

export const baseUrl = `${baseDomain}`;
export const baseUrl2 = `${baseImage}`;


export default axios.create({
    baseUrl,
    baseUrl2,
    headers: customHeaders
});

export const serializeQuery = query => {
    return Object.keys(query)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
        .join('&');
};
