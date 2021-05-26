import { IExerciseCategory } from 'entities'
import Api from 'helpers/api'

async function getExerciseCategories(): Promise<IExerciseCategory[]> {
  const response = await Api(true).get('/exerciseCategories')
  return response && response.data
}

async function getExerciseCategory(id: number): Promise<IExerciseCategory> {
  const response = await Api(true).get(`/exerciseCategories/${id}`)
  return response && response.data
}

// interface IAddExerciseCategory {
//   data: {
//     name: string;
//   }
// }
async function addExerciseCategory(data: any) {
  // return Api(true).post('/exerciseCategories', data)

  const response = await Api(true).post('/exerciseCategories', data)
  return response && response.data
}

function editExerciseCategory(id: number, data: any) {
  return Api(true).put(`/exerciseCategories/${id}`, data)
}

function removeExerciseCategory(id: number) {
  return Api(true).delete(`/exerciseCategories/${id}`)
}

export const ServiceExerciseCategories = {
  getExerciseCategories,
  getExerciseCategory,
  addExerciseCategory,
  editExerciseCategory,
  removeExerciseCategory
}