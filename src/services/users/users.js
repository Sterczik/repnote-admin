import Api from 'helpers/api'

function getUsers() {
    return Api(true).get('/users')
}

function getUser(id) {
    return Api(true).get(`/users/${id}`)
}

function removeUser(id) {
    return Api(true).delete(`/users/${id}`)
}

export const ServiceUsers = {
    getUsers,
    getUser,
    removeUser,
}