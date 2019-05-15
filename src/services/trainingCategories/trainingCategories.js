import axios from 'axios'
import { baseUrl } from '../../helpers/baseUrl'

function getTrainingCategories() {
  return axios.get(`${baseUrl}/api/admin/trainingCategories`)
}

function getTrainingCategory(id) {
  return axios.get(`${baseUrl}/api/admin/trainingCategories/${id}`)
}

export const ServiceTrainingCategories = {
  getTrainingCategories,
  getTrainingCategory
}