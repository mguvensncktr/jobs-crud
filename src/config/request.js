import axios from 'axios';

const HTTPClient = axios.create({
    baseURL: 'https://mobiloby.click/test/',
});

HTTPClient.defaults.headers.common["Content-Type"] = "application/json";

export { HTTPClient };

