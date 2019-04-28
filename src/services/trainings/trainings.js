import axios from 'axios'
import { baseUrl } from '../../helpers/baseUrl'

function getTrainings() {
    return axios.get(`${baseUrl}/api/admin/trainings`)
}

export const ServiceTrainings = {
    getTrainings
}