import axios from 'axios'
import { baseUrl } from '../../helpers/baseUrl'

function getTokens() {
    return axios.get(`${baseUrl}/api/admin/tokens`)
}

function removeToken(id) {
    return axios.delete(`${baseUrl}/api/admin/tokens/${id}`)
}

export const ServiceTokens = {
    getTokens,
    removeToken
}