import axios from 'axios'

export const client = axios.create({
    baseURL: 'https://lianalianov.com/wp/wp-json/wp/v2/',
    timeout: 1000,
    headers: {'X-Custom-Header' : 'posts'}
})