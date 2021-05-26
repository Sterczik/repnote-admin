import Api from 'helpers/api'

async function getTrainings() {
    const response = await Api(true).get('/trainings')
    return response && response.data
}

function getTraining(id: number) {
    return Api(true).get(`/trainings/${id}`)
}

function removeTraining(id: number) {
    return Api(true).delete(`/trainings/${id}`)
}

export const ServiceTrainings = {
    getTrainings,
    getTraining,
    removeTraining,
}