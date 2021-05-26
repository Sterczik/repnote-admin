import Api from 'helpers/api'

async function getTokens() {
    const response = await Api(true).get('/tokens')
    return response && response.data
}

async function removeToken(id: number) {
    const response = await Api(true).delete(`/tokens/${id}`)
    return response && response.data
}

export const ServiceTokens = {
    getTokens,
    removeToken
}