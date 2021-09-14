import env from '@/env'
import { FetchParams } from './types'

const baseURLEndpoint = env.baseUrl

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
      'x-app-id': env.appId,
      'x-app-key': env.appKey,
    },
  })

  request.then(({ status }) => {
    if (status === 401) {
      window.alert('Não autorizado')
    }
  })
  return request
}
