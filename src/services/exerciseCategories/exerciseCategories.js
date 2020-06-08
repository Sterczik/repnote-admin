import Api from 'helpers/api'

function getExerciseCategories() {
  return Api(true).get('/exerciseCategories')
}

function getExerciseCategory(id) {
  return Api(true).get(`/exerciseCategories/${id}`)
}

function addExerciseCategory(data) {
  return Api(true).post('/exerciseCategories', data)
}

function editExerciseCategory(id, data) {
  return Api(true).put(`/exerciseCategories/${id}`, data)
}

function removeExerciseCategory(id) {
  return Api(true).delete(`/exerciseCategories/${id}`)
}

export const ServiceExerciseCategories = {
  getExerciseCategories,
  getExerciseCategory,
  addExerciseCategory,
  editExerciseCategory,
  removeExerciseCategory
}