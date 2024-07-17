import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/products/',
    timeout: 3000,
    timeoutErrorMessage: 'request timed out'
})
export default axiosInstance