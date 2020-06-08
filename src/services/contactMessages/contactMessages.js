import Api from 'helpers/api'

function getContactMessages() {
  return Api(true).get('/contactMessages')
}

function getContactMessage(id) {
  return Api(true).get(`/contactMessages/${id}`)
}

function removeContactMessage(id) {
  return Api(true).delete(`/contactMessages/${id}`)
}

export const ServiceContactMessages = {
  getContactMessages,
  getContactMessage,
  removeContactMessage
}