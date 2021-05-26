import Api from 'helpers/api'
import { IContactMessage } from 'entities'

async function getContactMessages(): Promise<IContactMessage[]> {
  const response = await Api(true).get('/contactMessages')
  return response && response.data
}

function getContactMessage(id: any) {
  return Api(true).get(`/contactMessages/${id}`)
}

function removeContactMessage(id: any) {
  return Api(true).delete(`/contactMessages/${id}`)
}

export const ServiceContactMessages = {
  getContactMessages,
  getContactMessage,
  removeContactMessage
}