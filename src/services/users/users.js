import axios from 'axios'
import { baseUrl } from '../../helpers/baseUrl'

function getUsers() {
    return axios.get(`${baseUrl}/api/admin/users`)
}

function getUser(id) {
    return axios.get(`${baseUrl}/api/admin/users/${id}`)
}

function removeUser(id) {
    return axios.delete(`${baseUrl}/api/admin/users/${id}`)
}

export const ServiceUsers = {
    getUsers,
    getUser,
    removeUser,
}