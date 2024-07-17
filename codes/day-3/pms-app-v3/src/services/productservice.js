import axiosInstance from "@/config/axiosconfig"

export const getProducts = () => {
    return axiosInstance.get('')
}
export const getProduct = (id) => {
    return axiosInstance.get(`${id}`)
}
export const deleteProduct = (id) => {
    return axiosInstance.delete(`${id}`)
}
export const addProduct = (product) => {
    return axiosInstance.post('', product)
}
export const updateProduct = (product, id) => {
    return axiosInstance.post(`${id}`, product)
}