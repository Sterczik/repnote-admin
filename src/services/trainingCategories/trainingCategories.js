import Api from 'helpers/api'

function getTrainingCategories() {
  return Api(true).get('/trainingCategories')
}

function getTrainingCategory(id) {
  return Api(true).get(`/trainingCategories/${id}`)
}

function addTrainingCategory(data) {
  return Api(true).post('/trainingCategories', data)
}

function editTrainingCategory(id, data) {
  return Api(true).put(`/trainingCategories/${id}`, data)
}

function removeTrainingCategory(id) {
  return Api(true).delete(`/trainingCategories/${id}`)
}

export const ServiceTrainingCategories = {
  getTrainingCategories,
  getTrainingCategory,
  addTrainingCategory,
  editTrainingCategory,
  removeTrainingCategory
}