import axios from 'axios'
import { baseUrl } from '../../helpers/baseUrl'

function getTrainingCategories() {
  return axios.get(`${baseUrl}/api/admin/trainingCategories`)
}

function getTrainingCategory(id) {
  return axios.get(`${baseUrl}/api/admin/trainingCategories/${id}`)
}

function addTrainingCategory(data) {
  return axios.post(`${baseUrl}/api/admin/trainingCategories`, data)
}

function editTrainingCategory(id, data) {
  return axios.put(`${baseUrl}/api/admin/trainingCategories/${id}`, data)
}

function removeTrainingCategory(id) {
  return axios.delete(`${baseUrl}/api/admin/trainingCategories/${id}`)
}

export const ServiceTrainingCategories = {
  getTrainingCategories,
  getTrainingCategory,
  addTrainingCategory,
  editTrainingCategory,
  removeTrainingCategory
}