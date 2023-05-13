import { apiAuth } from '../utils/api'

export const login = async (data) => {
    return apiAuth.post('/api/login', data)
}

export const register = async (data) => {
    return apiAuth.post('/api/register', data)
}