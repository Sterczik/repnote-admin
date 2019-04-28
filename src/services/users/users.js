import axios from 'axios'
import { baseUrl } from '../../helpers/baseUrl'

function getUsers() {
    return axios.get(`${baseUrl}/api/admin/users`)
}

export const ServiceUsers = {
    getUsers
}