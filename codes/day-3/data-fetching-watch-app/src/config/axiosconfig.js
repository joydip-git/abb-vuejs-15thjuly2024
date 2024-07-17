import Axios from 'axios'

const url = "https://jsonplaceholder.typicode.com/todos";

const axiosInstance = Axios.create({
    baseURL: url,
    timeout: 1000,
    timeoutErrorMessage: 'request timed out'
})
//axiosInstance.interceptors.request.use()
export default axiosInstance