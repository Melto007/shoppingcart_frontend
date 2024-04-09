// import axios from "axios"
// const BASE_URL = 'http://127.0.0.1:8000/api/'

// export default axios.create({
//     baseURL: BASE_URL
// })

// export const instance = axios.create({
//     baseURL: BASE_URL,
//     headers: { 'Content-Type': 'application/json' },
//     withCredentials: true
// })
import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

let refresh = false

instance.interceptors.response.use(response => response, async error => {
    if(error.response.status === 403 && !refresh) {
        refresh = true

        const response = await instance.post(
            'refresh/',
            {},
            { withCredentials: true }
        )

        if(response.status === 200) {
            instance.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`

            return instance(error.config)
        }
    }
    refresh = false
    return error
})

export default instance