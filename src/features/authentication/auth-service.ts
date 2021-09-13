import httpRequest from '@/data-source/http-request'
import { Storage } from '@/data-source/storage'
import { AuthConstants } from './auth-constants.enum'

export class AuthService {
  storage: Storage
  token: string
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }

  constructor() {
    this.storage = new Storage('session')
    this.token = this.storage.getItem(AuthConstants.token)
  }

  get accessToken() {
    return this.token
  }

  async connect() {
    try {
      const request = await httpRequest.nativeFetch('/api/get-token')
      const response = await request.json()

      if (response && response.access_token) {
        const { access_token } = response
        this.storage.setItem(AuthConstants.token, access_token)
        return access_token
      }

      return false
    } catch {
      throw new Error('Error on Auth!')
    }
  }
}
