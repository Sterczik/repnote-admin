import { authConstants } from './constants'
import { history } from 'helpers/history'

import { ServiceAdmins } from 'services/admins/admins'

function logout() {
  const logoutInProcess = () => ({
    type: authConstants.LOGOUT_IN_PROGRESS
  })

  const logoutSuccess = () => ({
    type: authConstants.LOGOUT_SUCCESS
  })

  const logoutFailure = () => ({
    type: authConstants.LOGOUT_FAILURE
  })

  return (dispatch) => {
    dispatch(logoutInProcess())

    ServiceAdmins.logout()
      .then(() => {
        dispatch(logoutSuccess())
        history.push('/')
      })
      .catch(() => {
        dispatch(logoutFailure())
        history.push('/')
      })
  }
}

function login(email, password) {
  const loginInProcess = (user) => ({
    type: authConstants.LOGIN_IN_PROCESS,
    user
  })

  const loginSuccess = (tokens) => ({
    type: authConstants.LOGIN_SUCCESS,
    tokens
  })

  const loginFailure = (error) => ({
    type: authConstants.LOGIN_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(loginInProcess({ email }))

    ServiceAdmins.login(email, password)
      .then((response) => {
        const { data } = response
        if (data.success) {
          if (data.token.token && data.token.refreshToken) {
            localStorage.setItem('token', String(data.token.token))
            localStorage.setItem('refreshToken', data.token.refreshToken)

            dispatch(loginSuccess({
              accessToken: data.token.token,
              refreshToken: data.token.refreshToken
            }))
            history.push('/admin/dashboard')
          }
        } else {
          dispatch(loginFailure())
        }
      })
      .catch((error) => {
        dispatch(loginFailure(error))
      })
  }
}

function refreshToken(dispatch, refreshToken) {
  const refreshTokenSuccess = (tokens) => {
    localStorage.setItem('token', tokens.accessToken)
    localStorage.setItem('refreshToken', tokens.refreshToken)
    return {
      type: authConstants.SAVE_ACCESS_TOKEN_SUCCESS,
      tokens
    }
  }

  const freshTokenPromise = ServiceAdmins.refreshToken(refreshToken)
    .then(response => {
      const { data } = response

      if (data.success) {
        dispatch({
          type: authConstants.REFRESH_TOKEN_SUCCESS
        })
  
        dispatch(refreshTokenSuccess({
          accessToken: data.token.token,
          refreshToken: data.token.refreshToken
        }))
      }

      return data.token.token && data.token.refreshToken
        ? Promise.resolve({
          accessToken: data.token.token,
          refreshToken: data.token.refreshToken
        }) : Promise.reject({
          message: 'Could not refresh token'
        })
    })
    .catch((e) => {
      dispatch({
        type: authConstants.REFRESH_TOKEN_FAILURE
      })
      return Promise.reject(e)
    })

  dispatch({
    type: authConstants.REFRESH_TOKEN_IN_PROCESS,
    freshTokenPromise
  })

  return freshTokenPromise
}

export const authActions = {
  logout,
  login,
  refreshToken
}
