import axios from "@/api/axios";

function setHeader(key: string, value: string) {
    axios.defaults.headers.common[key] = value
}

function removeHeader(key: string) {
    if (!axios.defaults.headers.common[key]) return;
    delete axios.defaults.headers.common[key];
}


export {setHeader, removeHeader}
