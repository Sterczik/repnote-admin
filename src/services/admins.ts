import { AxiosResponse } from 'axios'
import Api from 'helpers/api'

function login(email: string, password: string): Promise<AxiosResponse<any>> {
    return Api().post('/admins/login', {
        email,
        password
    })
}

function logout(): Promise<AxiosResponse<any>> {
    const refreshToken = localStorage.getItem('refreshToken')
    const accessToken = localStorage.getItem('token')
  
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
  
    return Api(true, accessToken).post('/admins/logout', {
        token: refreshToken
    })
}

function refreshToken(refreshToken: string): Promise<AxiosResponse<any>> {
    return Api().post('admins/refreshToken', { refreshToken })
}

function changePassword(oldPassword: string, newPassword: string, newPasswordConfirm: string): Promise<AxiosResponse<any>> {
    const body = JSON.stringify({
      oldPassword: oldPassword,
      password: newPassword,
      password_confirmation: newPasswordConfirm
    })
    return Api(true).put('/admins/change-password', body)
}

export const ServiceAdmins = {
    login,
    logout,
    refreshToken,
    changePassword
}