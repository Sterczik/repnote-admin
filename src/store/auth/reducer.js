import { authConstants } from './constants'

const accessToken = localStorage.getItem('token') && localStorage.getItem('token').length ? localStorage.getItem('token') : null
const refreshToken = localStorage.getItem('refreshToken') && localStorage.getItem('refreshToken').length ? localStorage.getItem('refreshToken') : null

const initialState = accessToken && refreshToken ? {
  loggedIn: true,
  loggingIn: false,
  user: {
    accessToken: accessToken,
    refreshToken: refreshToken
  },
  userInfo: {},
  freshTokenPromise: null,
  error: {}
} : {
  loggedIn: false,
  loggingIn: false,
  user: {},
  userInfo: {},
  freshTokenPromise: null,
  error: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    // Login
    case authConstants.LOGIN_IN_PROCESS:
      return {
        ...state,
        loggingIn: true,
        loggedIn: false,
        user: {}
      }
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        user: {
          accessToken: action.tokens.accessToken,
          refreshToken: action.tokens.refreshToken
        },
        error: {}
      }
    case authConstants.LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        loggedIn: false,
        user: {},
        error: action.error
      }
    // Refresh Token
    case authConstants.REFRESH_TOKEN_IN_PROCESS:
      return {
        ...state,
        freshTokenPromise: action.freshTokenPromise
      }
    case authConstants.REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        freshTokenPromise: null
      }
    case authConstants.REFRESH_TOKEN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        loggedIn: false,
        user: {}
      }
    // Save Token
    case authConstants.SAVE_ACCESS_TOKEN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          accessToken: action.tokens.accessToken,
          refreshToken: action.tokens.refreshToken
        },
        freshTokenPromise: null
      }
    // Logout
    case authConstants.LOGOUT_IN_PROGRESS:
      return {
        ...state
      }
    case authConstants.LOGOUT_SUCCESS:
      return {
        ...state,
        loggedIn: false,
        user: {}
      }
    case authConstants.LOGOUT_FAILURE:
      return {
        ...state,
        loggedIn: false,
        user: {}
      }
    // Change Password
    case authConstants.CHANGE_PASSWORD_IN_PROCESS:
      return {
        ...state
      }
    case authConstants.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        error: {}
      }
    case authConstants.CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.error
      }
    // Default
    default:
      return state
  }
}
