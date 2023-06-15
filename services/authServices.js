import baseApi from '../utils/api'

export const login = async ({email,password}) => {
    return baseApi.post('/login', {email,password})
}

// export const register = async (data) => {
//     return apiAuth.post('/register', data)
// }