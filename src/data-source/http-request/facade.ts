import * as requests from './requests'
import { FetchParams } from './types'

const httpRequestFacade = () => {
  function main(input: RequestInfo, init?: RequestInit | undefined) {
    return requests.appHttpRequest(input, init)
  }

  main.nativeFetch = requests.nativeFetch
  main.get = (...params: FetchParams) => requests.withMethod('GET', ...params)
  main.post = (...params: FetchParams) => requests.withMethod('POST', ...params)
  main.put = (...params: FetchParams) => requests.withMethod('PUT', ...params)
  main.patch = (...params: FetchParams) =>
    requests.withMethod('PATCH', ...params)

  return main
}

export default httpRequestFacade()
