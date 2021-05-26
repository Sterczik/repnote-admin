import { globalConstants } from './constants'

const globalReducerDefaultState = {
  trainings: [],
  training: {},

  users: [],
  user: {},

  trainingCategories: [],
  trainingCategory: {},

  exerciseCategories: [],
  exerciseCategory: {},

  contactMessages: [],
  contactMessage: {},

  tokens: [],

  error: {}
}

const state = (state = globalReducerDefaultState, action) => {
  switch (action.type) {
    // Get Trainings
    case globalConstants.GET_TRAININGS_IN_PROCESS:
      return state
    case globalConstants.GET_TRAININGS_SUCCESS:
      return {
        ...state,
        trainings: action.trainings
      }
    case globalConstants.GET_TRAININGS_FAILURE:
      return state
    // Get Training
    case globalConstants.GET_TRAINING_IN_PROCESS:
      return {
        ...state,
        training: {},
        error: {}
      }
    case globalConstants.GET_TRAINING_SUCCESS:
      return {
        ...state,
        training: action.training
      }
    case globalConstants.GET_TRAINING_FAILURE:
      return state
    // Remove Training
    case globalConstants.REMOVE_TRAINING_IN_PROCESS:
      return {
        ...state,
        error: {}
      }
    case globalConstants.REMOVE_TRAINING_SUCCESS:
      return {
        ...state,
        training: {}
      }
    case globalConstants.REMOVE_TRAINING_FAILURE:
      return {
        ...state,
        error: action.error
      }
    // Get Users
    case globalConstants.GET_USERS_IN_PROCESS:
      return state
    case globalConstants.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.users
      }
    case globalConstants.GET_USERS_FAILURE:
      return state
    // Get User
    case globalConstants.GET_USER_IN_PROCESS:
      return {
        ...state,
        user: {},
        error: {}
      }
    case globalConstants.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.user
      }
    case globalConstants.GET_USER_FAILURE:
      return state
    // Remove User
    case globalConstants.REMOVE_USER_IN_PROCESS:
      return {
        ...state,
        error: {}
      }
    case globalConstants.REMOVE_USER_SUCCESS:
      return {
        ...state,
        user: {}
      }
    case globalConstants.REMOVE_USER_FAILURE:
      return {
        ...state,
        error: action.error
      }
    // Get Trainings Categories
    case globalConstants.GET_TRAINING_CATEGORIES_IN_PROCESS:
      return {
        ...state,
        trainingCategories: []
      }
    case globalConstants.GET_TRAINING_CATEGORIES_SUCCESS:
      return {
        ...state,
        trainingCategories: action.trainingCategories
      }
    case globalConstants.GET_TRAINING_CATEGORIES_FAILURE:
      return {
        ...state,
        trainingCategories: []
      }
    // Get Training Category
    case globalConstants.GET_TRAINING_CATEGORY_IN_PROCESS:
      return {
        ...state,
        trainingCategory: {},
        error: {}
      }
    case globalConstants.GET_TRAINING_CATEGORY_SUCCESS:
      return {
        ...state,
        trainingCategory: action.trainingCategory
      }
    case globalConstants.GET_TRAINING_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error
      }
    // Edit Training Category
    case globalConstants.EDIT_TRAINING_CATEGORY_IN_PROCESS:
      return {
        ...state,
        error: {}
      }
    case globalConstants.EDIT_TRAINING_CATEGORY_SUCCESS:
      return {
        ...state,
        trainingCategory: action.trainingCategory
      }
    case globalConstants.EDIT_TRAINING_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error
      }
    // Remove Training Category
    case globalConstants.REMOVE_TRAINING_CATEGORY_IN_PROCESS:
      return {
        ...state,
        error: {}
      }
    case globalConstants.REMOVE_TRAINING_CATEGORY_SUCCESS:
      return {
        ...state,
        trainingCategory: {}
      }
    case globalConstants.REMOVE_TRAINING_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error
      }
    // Get Exercise Categories
    // case globalConstants.GET_EXERCISE_CATEGORIES_IN_PROCESS:
    //   return {
    //     ...state,
    //     exerciseCategories: []
    //   }
    // case globalConstants.GET_EXERCISE_CATEGORIES_SUCCESS:
    //   return {
    //     ...state,
    //     exerciseCategories: action.exerciseCategories
    //   }
    // case globalConstants.GET_EXERCISE_CATEGORIES_FAILURE:
    //   return {
    //     ...state,
    //     exerciseCategories: []
    //   }
    // Get Exercise Category
    case globalConstants.GET_EXERCISE_CATEGORY_IN_PROCESS:
      return {
        ...state,
        exerciseCategory: {},
        error: {}
      }
    case globalConstants.GET_EXERCISE_CATEGORY_SUCCESS:
      return {
        ...state,
        exerciseCategory: action.exerciseCategory
      }
    case globalConstants.GET_EXERCISE_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error
      }
    // Edit Exercise Category
    case globalConstants.EDIT_EXERCISE_CATEGORY_IN_PROCESS:
      return {
        ...state,
        error: {}
      }
    case globalConstants.EDIT_EXERCISE_CATEGORY_SUCCESS:
      return {
        ...state,
        exerciseCategory: action.exerciseCategory
      }
    case globalConstants.EDIT_EXERCISE_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error
      }
    // Remove Exercise Category
    case globalConstants.REMOVE_EXERCISE_CATEGORY_IN_PROCESS:
      return {
        ...state,
        error: {}
      }
    case globalConstants.REMOVE_EXERCISE_CATEGORY_SUCCESS:
      return {
        ...state,
        exerciseCategory: {}
      }
    case globalConstants.REMOVE_EXERCISE_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error
      }
    // Get Contact Messages
    // case globalConstants.GET_CONTACT_MESSAGES_IN_PROCESS:
    //   return {
    //     ...state,
    //     contactMessages: []
    //   }
    // case globalConstants.GET_CONTACT_MESSAGES_SUCCESS:
    //   return {
    //     ...state,
    //     contactMessages: action.contactMessages
    //   }
    // case globalConstants.GET_CONTACT_MESSAGES_FAILURE:
    //   return {
    //     ...state,
    //     contactMessages: []
    //   }
    // Get Contact Message
    case globalConstants.GET_CONTACT_MESSAGE_IN_PROCESS:
      return {
        ...state,
        contactMessage: {},
        error: {}
      }
    case globalConstants.GET_CONTACT_MESSAGE_SUCCESS:
      return {
        ...state,
        contactMessage: action.contactMessage
      }
    case globalConstants.GET_CONTACT_MESSAGE_FAILURE:
      return state
    // Remove Contact Message
    case globalConstants.REMOVE_CONTACT_MESSAGE_IN_PROCESS:
      return {
        ...state,
        error: {}
      }
    case globalConstants.REMOVE_CONTACT_MESSAGE_SUCCESS:
      return {
        ...state,
        contactMessage: {}
      }
    case globalConstants.REMOVE_CONTACT_MESSAGE_FAILURE:
      return {
        ...state,
        error: action.error
      }
    // Get Tokens
    // case globalConstants.GET_TOKENS_IN_PROCESS:
    //   return {
    //     ...state,
    //     tokens: []
    //   }
    // case globalConstants.GET_TOKENS_SUCCESS:
    //   return {
    //     ...state,
    //     tokens: action.tokens
    //   }
    // case globalConstants.GET_TOKENS_FAILURE:
    //   return {
    //     ...state,
    //     tokens: []
    //   }
    // Remove Token
    case globalConstants.REMOVE_TOKEN_IN_PROCESS:
      return {
        ...state,
      }
    case globalConstants.REMOVE_TOKEN_SUCCESS:
      return {
        ...state,
      }
    case globalConstants.REMOVE_TOKEN_FAILURE:
      return {
        ...state,
      }
    // Default
    default:
      return state
  }
}

export default state
