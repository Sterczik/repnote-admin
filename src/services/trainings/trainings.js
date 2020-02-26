import Api from '../../helpers/api'

function getTrainings() {
    return Api(true).get('/trainings')
}

function getTraining(id) {
    return Api(true).get(`/trainings/${id}`)
}

function removeTraining(id) {
    return Api(true).delete(`/trainings/${id}`)
}

export const ServiceTrainings = {
    getTrainings,
    getTraining,
    removeTraining,
}