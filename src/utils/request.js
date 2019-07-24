import axios from 'axios'

const service = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 3000,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
})

service.interceptors.response.use(
    response => response,
    error => {
        console.log(error);
        return Promise.reject(error);
    }
)

export default service;