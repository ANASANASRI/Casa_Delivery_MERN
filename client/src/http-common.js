import axios from "axios"

const http = axios.create({
    baseURL: 'http://localhost:5566',
    headers: {"content":"application/json"}
});

export default http