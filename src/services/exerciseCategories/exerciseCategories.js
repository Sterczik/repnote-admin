import axios from 'axios'
import { baseUrl } from '../../helpers/baseUrl'

function getExerciseCategories() {
  return axios.get(`${baseUrl}/api/admin/exerciseCategories`)
}

function getExerciseCategory(id) {
  return axios.get(`${baseUrl}/api/admin/exerciseCategories/${id}`)
}

function addExerciseCategory(data) {
  return axios.post(`${baseUrl}/api/admin/exerciseCategories`, data)
}

function removeExerciseCategory(id) {
  return axios.delete(`${baseUrl}/api/admin/exerciseCategories/${id}`)
}

export const ServiceExerciseCategories = {
  getExerciseCategories,
  getExerciseCategory,
  addExerciseCategory,
  removeExerciseCategory
}