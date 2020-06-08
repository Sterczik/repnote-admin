import Api from 'helpers/api'

function login(email, password) {
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

function refreshToken(refreshToken) {
    return Api().post('admins/refreshToken', { refreshToken })
}

export const ServiceAdmins = {
    login,
    logout,
    refreshToken
}