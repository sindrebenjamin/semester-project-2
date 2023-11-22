import { load } from "./storage/load.js";

export const headers = (contentType) => {
    const token = load("token");
    const headers = {}

    if(contentType) {
        headers["Content-Type"] = contentType;
    }

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    return headers;
   
}