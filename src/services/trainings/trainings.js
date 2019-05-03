import axios from 'axios'
import { baseUrl } from '../../helpers/baseUrl'

function getTrainings() {
    return axios.get(`${baseUrl}/api/admin/trainings`)
}

function getTraining(id) {
    return axios.get(`${baseUrl}/api/admin/trainings/${id}`)
}

export const ServiceTrainings = {
    getTrainings,
    getTraining
}