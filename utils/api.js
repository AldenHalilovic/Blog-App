import axios from "axios";

export const apiJson = axios.create({
    baseURL: "https://reqres.in/"
})

apiJson.interceptors.response.use((res) => {
    return res.data
})

const baseApi = axios.create({
    baseURL:"http://localhost:3000/api/"
})  
export default baseApi



