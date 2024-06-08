import axios from 'axios'

export const client = axios.create({
    baseURL: 'http://localhost/wp-react/server/wp-json/wp/v2/',
    timeout: 1000,
    headers: {'X-Custom-Header' : 'posts'}
})