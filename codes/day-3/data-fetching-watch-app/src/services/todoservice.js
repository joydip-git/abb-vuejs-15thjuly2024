import axiosInstance from '@/config/axiosconfig'
//import Axios from 'axios'
//const url = "https://jsonplaceholder.typicode.com/todos";

export const getTodos = () => {
    //return Axios.get(url)
    return axiosInstance.get('')
}

export const getTodo = (id) => {
    // return Axios.get(`${url}/${id}`)
    return axiosInstance.get(`/${id}`)
}