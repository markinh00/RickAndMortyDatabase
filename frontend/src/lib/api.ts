import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.BASE_URL || "http://localhost:8000/",
    headers: {
        'Content-Type': 'application/json',
    }
})
