import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {                  
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,                 
    },
})

export default api;