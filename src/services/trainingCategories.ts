import Api from 'helpers/api'

async function getTrainingCategories() {
  const response = await Api(true).get('/trainingCategories')
  return response && response.data
}

function getTrainingCategory(id: number) {
  return Api(true).get(`/trainingCategories/${id}`)
}

function addTrainingCategory(data: any) {
  return Api(true).post('/trainingCategories', data)
}

function editTrainingCategory(id: number, data: any) {
  return Api(true).put(`/trainingCategories/${id}`, data)
}

function removeTrainingCategory(id: number) {
  return Api(true).delete(`/trainingCategories/${id}`)
}

export const ServiceTrainingCategories = {
  getTrainingCategories,
  getTrainingCategory,
  addTrainingCategory,
  editTrainingCategory,
  removeTrainingCategory
}