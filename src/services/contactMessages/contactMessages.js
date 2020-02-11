import axios from 'axios'
import { baseUrl } from '../../helpers/baseUrl'

function getContactMessages() {
  return axios.get(`${baseUrl}/api/admin/contactMessages`)
}

function getContactMessage(id) {
  return axios.get(`${baseUrl}/api/admin/contactMessages/${id}`)
}

function removeContactMessage(id) {
  return axios.delete(`${baseUrl}/api/admin/contactMessages/${id}`)
}

export const ServiceContactMessages = {
  getContactMessages,
  getContactMessage,
  removeContactMessage
}