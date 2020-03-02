import { globalConstants } from './constants'
import { history } from '../../helpers/history'

import { ServiceTrainings } from '../../services/trainings/trainings'
import { ServiceUsers } from '../../services/users/users'
import { ServiceTrainingCategories } from '../../services/trainingCategories/trainingCategories'
import { ServiceExerciseCategories } from '../../services/exerciseCategories/exerciseCategories'
import { ServiceContactMessages } from '../../services/contactMessages/contactMessages'
import { ServiceTokens } from '../../services/tokens/tokens'

// Trainings
export function getTrainings() {
  const getTrainingsInProcess = () => ({
    type: globalConstants.GET_TRAININGS_IN_PROCESS
  })

  const getTrainingsSuccess = (trainings) => ({
    type: globalConstants.GET_TRAININGS_SUCCESS,
    trainings
  })

  const getTrainingsFailure = (error) => ({
    type: globalConstants.GET_TRAININGS_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(getTrainingsInProcess())
    
    ServiceTrainings.getTrainings()
      .then((res) => {
        const trainings = res.data
        dispatch(getTrainingsSuccess(trainings))
      })
      .catch((error) => {
        dispatch(getTrainingsFailure(error))
      })
  }
}

export function getTraining(id) {
  const getTrainingInProcess = () => ({
    type: globalConstants.GET_TRAINING_IN_PROCESS
  })

  const getTrainingSuccess = (training) => ({
    type: globalConstants.GET_TRAINING_SUCCESS,
    training
  })

  const getTrainingFailure = (error) => ({
    type: globalConstants.GET_TRAINING_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(getTrainingInProcess())
    
    ServiceTrainings.getTraining(id)
      .then((res) => {
        const training = res.data
        dispatch(getTrainingSuccess(training))
      })
      .catch((error) => {
        dispatch(getTrainingFailure(error))
      })
  }
}

export function removeTraining(id) {
  const removeTrainingInProcess = () => ({
    type: globalConstants.REMOVE_TRAINING_IN_PROCESS
  })

  const removeTrainingSuccess = () => ({
    type: globalConstants.REMOVE_TRAINING_SUCCESS
  })

  const removeTrainingFailure = (error) => ({
    type: globalConstants.REMOVE_TRAINING_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(removeTrainingInProcess())
    
    ServiceTrainings.removeTraining(id)
      .then(() => {
        dispatch(removeTrainingSuccess())
        history.push('/admin/trainings')
      })
      .catch((error) => {
        dispatch(removeTrainingFailure(error))
      })
  }
}

// Users
export function getUsers() {
  const getUsersInProcess = () => ({
    type: globalConstants.GET_USERS_IN_PROCESS
  })

  const getTrainingsSuccess = (users) => ({
    type: globalConstants.GET_USERS_SUCCESS,
    users
  })

  const getTrainingsFailure = (error) => ({
    type: globalConstants.GET_USERS_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(getUsersInProcess())
    
    ServiceUsers.getUsers()
      .then((res) => {
        const users = res.data.users
        dispatch(getTrainingsSuccess(users))
      })
      .catch((error) => {
        dispatch(getTrainingsFailure(error))
      })
  }
}

export function getUser(id) {
  const getUserInProcess = () => ({
    type: globalConstants.GET_USER_IN_PROCESS
  })

  const getUserSuccess = (user) => ({
    type: globalConstants.GET_USER_SUCCESS,
    user
  })

  const getUserFailure = (error) => ({
    type: globalConstants.GET_USER_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(getUserInProcess())
    
    ServiceUsers.getUser(id)
      .then((res) => {
        const user = res.data
        dispatch(getUserSuccess(user))
      })
      .catch((error) => {
        dispatch(getUserFailure(error))
      })
  }
}

export function removeUser(id) {
  const removeUserInProcess = () => ({
    type: globalConstants.REMOVE_USER_IN_PROCESS
  })

  const removeUserSuccess = () => ({
    type: globalConstants.REMOVE_USER_SUCCESS
  })

  const removeUserFailure = (error) => ({
    type: globalConstants.REMOVE_USER_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(removeUserInProcess())
    
    ServiceUsers.removeUser(id)
      .then(() => {
        dispatch(removeUserSuccess())
        history.push('/admin/users')
      })
      .catch((error) => {
        dispatch(removeUserFailure(error.response.data))
      })
  }
}

// Training Categories
export function getTrainingCategories() {
  const getTrainingCategoriesInProcess = () => ({
    type: globalConstants.GET_TRAINING_CATEGORIES_IN_PROCESS
  })

  const getTrainingCategoriesSuccess = (trainingCategories) => ({
    type: globalConstants.GET_TRAINING_CATEGORIES_SUCCESS,
    trainingCategories
  })

  const getTrainingCategoriesFailure = (error) => ({
    type: globalConstants.GET_TRAINING_CATEGORIES_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(getTrainingCategoriesInProcess())

    ServiceTrainingCategories.getTrainingCategories()
      .then((res) => {
        const trainingCategories = res.data
        dispatch(getTrainingCategoriesSuccess(trainingCategories))
      })
      .catch((error) => {
        dispatch(getTrainingCategoriesFailure(error))
      })
  }
}

export function getTrainingCategory(id) {
  const getTrainingCategoryInProcess = () => ({
    type: globalConstants.GET_TRAINING_CATEGORY_IN_PROCESS
  })

  const getTrainingCategorySuccess = (trainingCategory) => ({
    type: globalConstants.GET_TRAINING_CATEGORY_SUCCESS,
    trainingCategory
  })

  const getTrainingCategoryFailure = (error) => ({
    type: globalConstants.GET_TRAINING_CATEGORY_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(getTrainingCategoryInProcess())
    
    ServiceTrainingCategories.getTrainingCategory(id)
      .then((res) => {
        const trainingCategory = res.data
        dispatch(getTrainingCategorySuccess(trainingCategory))
      })
      .catch((error) => {
        dispatch(getTrainingCategoryFailure(error.response.data))
      })
  }
}

export function addTrainingCategory(name) {
  const addTrainingCategoryInProcess = () => ({
    type: globalConstants.ADD_TRAINING_CATEGORY_IN_PROCESS
  })

  const addTrainingCategorySuccess = () => ({
    type: globalConstants.ADD_TRAINING_CATEGORY_SUCCESS
  })

  const addTrainingCategoryFailure = (error) => ({
    type: globalConstants.ADD_TRAINING_CATEGORY_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(addTrainingCategoryInProcess())

    ServiceTrainingCategories.addTrainingCategory({ name })
      .then(() => {
        dispatch(addTrainingCategorySuccess())
        history.push('/admin')
        history.push('/admin/trainingCategories')
      })
      .catch((error) => {
        dispatch(addTrainingCategoryFailure(error))
      })
  }
}

export function editTrainingCategory(id, data) {
  const editTrainingCategoryInProcess = () => ({
    type: globalConstants.EDIT_TRAINING_CATEGORY_IN_PROCESS
  })

  const editTrainingCategorySuccess = (trainingCategory) => ({
    type: globalConstants.EDIT_TRAINING_CATEGORY_SUCCESS,
    trainingCategory
  })

  const editTrainingCategoryFailure = (error) => ({
    type: globalConstants.EDIT_TRAINING_CATEGORY_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(editTrainingCategoryInProcess())

    ServiceTrainingCategories.editTrainingCategory(id, data)
      .then((res) => {
        const trainingCategory = res.data
        dispatch(editTrainingCategorySuccess(trainingCategory))
      })
      .catch((error) => {
        dispatch(editTrainingCategoryFailure(error))
      })
  }
}

export function removeTrainingCategory(id) {
  const removeTrainingCategoryInProcess = () => ({
    type: globalConstants.REMOVE_TRAINING_CATEGORY_IN_PROCESS
  })

  const removeTrainingCategorySuccess = () => ({
    type: globalConstants.REMOVE_TRAINING_CATEGORY_SUCCESS
  })

  const removeTrainingCategoryFailure = (error) => ({
    type: globalConstants.REMOVE_TRAINING_CATEGORY_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(removeTrainingCategoryInProcess())
    
    ServiceTrainingCategories.removeTrainingCategory(id)
      .then(() => {
        dispatch(removeTrainingCategorySuccess())
        history.push('/admin/trainingCategories')
      })
      .catch((error) => {
        dispatch(removeTrainingCategoryFailure(error.response.data))
      })
  }
}

// Exercise Categories
export function getExerciseCategories() {
  const getExerciseCategoriesInProcess = () => ({
    type: globalConstants.GET_EXERCISE_CATEGORIES_IN_PROCESS
  })

  const getExerciseCategoriesSuccess = (exerciseCategories) => ({
    type: globalConstants.GET_EXERCISE_CATEGORIES_SUCCESS,
    exerciseCategories
  })

  const getExerciseCategoriesFailure = (error) => ({
    type: globalConstants.GET_EXERCISE_CATEGORIES_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(getExerciseCategoriesInProcess())

    ServiceExerciseCategories.getExerciseCategories()
      .then((res) => {
        const exerciseCategories = res.data
        dispatch(getExerciseCategoriesSuccess(exerciseCategories))
      })
      .catch((error) => {
        dispatch(getExerciseCategoriesFailure(error))
      })
  }
}

export function getExerciseCategory(id) {
  const getExerciseCategoryInProcess = () => ({
    type: globalConstants.GET_EXERCISE_CATEGORY_IN_PROCESS
  })

  const getExerciseCategorySuccess = (exerciseCategory) => ({
    type: globalConstants.GET_EXERCISE_CATEGORY_SUCCESS,
    exerciseCategory
  })

  const getExerciseCategoryFailure = (error) => ({
    type: globalConstants.GET_EXERCISE_CATEGORY_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(getExerciseCategoryInProcess())
    
    ServiceExerciseCategories.getExerciseCategory(id)
      .then((res) => {
        const exerciseCategory = res.data
        dispatch(getExerciseCategorySuccess(exerciseCategory))
      })
      .catch((error) => {
        dispatch(getExerciseCategoryFailure(error.response.data))
      })
  }
}

export function addExerciseCategory(name) {
  const addExerciseCategoryInProcess = () => ({
    type: globalConstants.ADD_EXERCISE_CATEGORY_IN_PROCESS
  })

  const addExerciseCategorySuccess = () => ({
    type: globalConstants.ADD_EXERCISE_CATEGORY_SUCCESS
  })

  const addExerciseCategoryFailure = (error) => ({
    type: globalConstants.ADD_EXERCISE_CATEGORY_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(addExerciseCategoryInProcess())

    ServiceExerciseCategories.addExerciseCategory({ name })
      .then(() => {
        dispatch(addExerciseCategorySuccess())
        history.push('/admin')
        history.push('/admin/exerciseCategories')
      })
      .catch((error) => {
        dispatch(addExerciseCategoryFailure(error))
      })
  }
}

export function editExerciseCategory(id, data) {
  const editExerciseCategoryInProcess = () => ({
    type: globalConstants.EDIT_EXERCISE_CATEGORY_IN_PROCESS
  })

  const editExerciseCategorySuccess = (exerciseCategory) => ({
    type: globalConstants.EDIT_EXERCISE_CATEGORY_SUCCESS,
    exerciseCategory
  })

  const editExerciseCategoryFailure = (error) => ({
    type: globalConstants.EDIT_EXERCISE_CATEGORY_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(editExerciseCategoryInProcess())

    ServiceExerciseCategories.editExerciseCategory(id, data)
      .then((res) => {
        const exerciseCategory = res.data
        dispatch(editExerciseCategorySuccess(exerciseCategory))
      })
      .catch((error) => {
        dispatch(editExerciseCategoryFailure(error))
      })
  }
}

export function removeExerciseCategory(id) {
  const removeExerciseCategoryInProcess = () => ({
    type: globalConstants.REMOVE_EXERCISE_CATEGORY_IN_PROCESS
  })

  const removeExerciseCategorySuccess = () => ({
    type: globalConstants.REMOVE_EXERCISE_CATEGORY_SUCCESS
  })

  const removeExerciseCategoryFailure = (error) => ({
    type: globalConstants.REMOVE_EXERCISE_CATEGORY_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(removeExerciseCategoryInProcess())
    
    ServiceExerciseCategories.removeExerciseCategory(id)
      .then(() => {
        dispatch(removeExerciseCategorySuccess())
        history.push('/admin/exerciseCategories')
      })
      .catch((error) => {
        dispatch(removeExerciseCategoryFailure(error.response.data))
      })
  }
}

export function getContactMessages() {
  const getContactMessagesInProcess = () => ({
    type: globalConstants.GET_CONTACT_MESSAGES_IN_PROCESS
  })

  const getContactMessagesSuccess = (contactMessages) => ({
    type: globalConstants.GET_CONTACT_MESSAGES_SUCCESS,
    contactMessages
  })

  const getContactMessagesFailure = (error) => ({
    type: globalConstants.GET_CONTACT_MESSAGES_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(getContactMessagesInProcess())

    ServiceContactMessages.getContactMessages()
      .then((res) => {
        const contactMessages = res.data
        dispatch(getContactMessagesSuccess(contactMessages))
      })
      .catch((error) => {
        dispatch(getContactMessagesFailure(error))
      })
  }
}

export function getContactMessage(id) {
  const getContactMessageInProcess = () => ({
    type: globalConstants.GET_CONTACT_MESSAGE_IN_PROCESS
  })

  const getContactMessageSuccess = (contactMessage) => ({
    type: globalConstants.GET_CONTACT_MESSAGE_SUCCESS,
    contactMessage
  })

  const getContactMessageFailure = (error) => ({
    type: globalConstants.GET_CONTACT_MESSAGE_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(getContactMessageInProcess())
    
    ServiceContactMessages.getContactMessage(id)
      .then((res) => {
        const contactMessage = res.data
        dispatch(getContactMessageSuccess(contactMessage))
      })
      .catch((error) => {
        dispatch(getContactMessageFailure(error.response.data))
      })
  }
}

export function removeContactMessage(id) {
  const removeContactMessageInProcess = () => ({
    type: globalConstants.REMOVE_CONTACT_MESSAGE_IN_PROCESS
  })

  const removeContactMessageSuccess = () => ({
    type: globalConstants.REMOVE_CONTACT_MESSAGE_SUCCESS
  })

  const removeContactMessageFailure = (error) => ({
    type: globalConstants.REMOVE_CONTACT_MESSAGE_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(removeContactMessageInProcess())
    
    ServiceContactMessages.removeContactMessage(id)
      .then(() => {
        dispatch(removeContactMessageSuccess())
        history.push('/admin/contactMessages')
      })
      .catch((error) => {
        dispatch(removeContactMessageFailure(error.response.data))
      })
  }
}

export function getTokens() {
  const getTokensInProcess = () => ({
    type: globalConstants.GET_TOKENS_IN_PROCESS
  })

  const getTokensSuccess = (tokens) => ({
    type: globalConstants.GET_TOKENS_SUCCESS,
    tokens
  })

  const getTokensFailure = (error) => ({
    type: globalConstants.GET_TOKENS_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(getTokensInProcess())

    ServiceTokens.getTokens()
      .then((res) => {
        const tokens = res.data
        dispatch(getTokensSuccess(tokens))
      })
      .catch((error) => {
        dispatch(getTokensFailure(error))
      })
  }
}

export function removeToken(id) {
  const removeTokenInProcess = () => ({
    type: globalConstants.REMOVE_TOKEN_IN_PROCESS
  })

  const removeTokenSuccess = () => ({
    type: globalConstants.REMOVE_TOKEN_SUCCESS
  })

  const removeTokenFailure = (error) => ({
    type: globalConstants.REMOVE_TOKEN_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(removeTokenInProcess())

    ServiceTokens.removeToken(id)
      .then(() => {
        dispatch(removeTokenSuccess())
        history.push('/admin')
        history.push('/admin/tokens')
      })
      .catch((error) => {
        dispatch(removeTokenFailure(error))
      })
  }
}
