import axios from "axios";

const backend = "http://localhost:8080"
export default function (url, method = "GET", data, headers = {}) {

    headers = {
        ...headers,
        'Authorization': localStorage.getItem("key"),
    };

    return axios(
        {
            baseURL: backend,
            url,
            method,
            data,
            headers: headers
        }
    )
}