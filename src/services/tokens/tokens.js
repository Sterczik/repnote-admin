import Api from 'helpers/api'

function getTokens() {
    return Api(true).get('/tokens')
}

function removeToken(id) {
    return Api(true).delete(`/tokens/${id}`)
}

export const ServiceTokens = {
    getTokens,
    removeToken
}