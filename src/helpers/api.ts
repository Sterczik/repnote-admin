import axios from 'axios'
import { baseUrl } from 'helpers/baseUrl'

interface IAxiosConfig {
  baseURL: string;
  headers: IAxiosHeaders;
}

interface IAxiosHeaders {
  'Accept': string;
  'Content-Type': string;
  'Authorization'?: string | null;
}

const api = (auth = false, accessToken: string | null = null) => {
  const token = localStorage.getItem('token') || accessToken
  let axiosConfig: IAxiosConfig = {
    baseURL: `${baseUrl}/api/admin`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  if (auth) {
    axiosConfig = {
      ...axiosConfig,
      headers: {
        ...axiosConfig.headers,
        'Authorization': `Bearer ${token}`
      }
    }
  }
  return axios.create(axiosConfig)
}

export default api
