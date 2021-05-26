import Api from 'helpers/api'

function login(email: string, password: string) {
    return Api().post('/admins/login', {
        email,
        password
    })
}

function logout() {
    const refreshToken = localStorage.getItem('refreshToken')
    const accessToken = localStorage.getItem('token')
  
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
  
    return Api(true, accessToken).post('/admins/logout', {
        token: refreshToken
    })
}

function refreshToken(refreshToken: string) {
    return Api().post('admins/refreshToken', { refreshToken })
}

function changePassword(oldPassword: string, newPassword: string, newPasswordConfirm: string) {
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