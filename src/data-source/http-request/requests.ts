import env from '@/env'
import { Storage } from '@/data-source/storage'
import { FetchParams } from './types'

const baseURLEndpoint = env.fatBaseURL

export function nativeFetch(...[input, init]: FetchParams): Promise<Response> {
  return fetch(input, init)
}

export function withMethod(
  method: 'POST' | 'GET' | 'PUT' | 'PATCH',
  ...[input, init]: FetchParams
): Promise<Response> {
  return appHttpRequest(input, { method, ...init })
}

export function appHttpRequest(
  ...[input, init]: FetchParams
): Promise<Response> {
  const request = fetch(`${baseURLEndpoint}${input}`, {
    ...init,
    headers: {
      ...(init?.headers || {}),
      'Content-Type': 'application/json',
      Authorization: `Bearer ${new Storage().getItem('accessToken')}`,
    },
  })

  request.then(({ status }) => {
    if (status === 401) {
      window.alert('Não autorizado')
    }
  })
  return request
}
