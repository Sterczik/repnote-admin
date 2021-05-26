import Api from 'helpers/api'

async function getUsers() {
    const response = await Api(true).get('/users')
    return response && response.data
}

function getUser(id: number) {
    return Api(true).get(`/users/${id}`)
}

function removeUser(id: number) {
    return Api(true).delete(`/users/${id}`)
}

export const ServiceUsers = {
    getUsers,
    getUser,
    removeUser,
}