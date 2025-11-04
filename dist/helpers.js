"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchApi = fetchApi;
async function fetchApi(action, method, data, callback) {
    const fdata = {
        method: method,
    };
    if (data) {
        fdata.headers = {
            "Content-Type": "application/json",
        };
        fdata.body = JSON.stringify(data);
    }
    let res = await fetch(action, fdata);
    let jdata = await res.json();
    if (callback)
        callback(jdata);
    return jdata;
}
