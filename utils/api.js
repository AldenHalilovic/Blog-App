import axios from "axios";

export const apiAuth = axios.create({
    baseURL: "https://reqres.in/"
})

apiAuth.interceptors.response.use((res) => {
    return res.data
})

