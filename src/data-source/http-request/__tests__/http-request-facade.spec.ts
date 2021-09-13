import httpRequest from '../index'

const globalFech = global.fetch as any

const mockHeaders = {
  headers: {
    Authorization: 'Bearer ',
    'Content-Type': 'application/json',
  },
}

describe('Http Request Facade', () => {
  beforeAll(() => {
    globalFech.mockImplementation(
      () =>
        new Promise((resolve) => {
          resolve({
            json: () => new Promise((resolve) => resolve({})),
          })
        })
    )
  })

  afterEach(() => {
    globalFech.mockClear()
  })

  it('should have called default', () => {
    httpRequest('/test')
    expect(global.fetch).toHaveBeenCalledWith(
      'https://platform.fatsecret.com/rest/server.api/test',
      mockHeaders
    )
  })

  it('should have call native fetch when access nativeFetch', () => {
    httpRequest.nativeFetch('https://platform.fatsecret.com/rest/server.api')
    expect(global.fetch).toHaveBeenCalledWith(
      'https://platform.fatsecret.com/rest/server.api',
      undefined
    )
  })

  it('should have get method', () => {
    httpRequest.get('/food')
    expect(global.fetch).toHaveBeenCalledWith(
      'https://platform.fatsecret.com/rest/server.api/food',
      { method: 'GET', ...mockHeaders }
    )
  })

  it('should have post method', () => {
    httpRequest.post('/food')
    expect(global.fetch).toHaveBeenCalledWith(
      'https://platform.fatsecret.com/rest/server.api/food',
      { method: 'POST', ...mockHeaders }
    )
  })

  it('should have put method', () => {
    httpRequest.put('/food')
    expect(global.fetch).toHaveBeenCalledWith(
      'https://platform.fatsecret.com/rest/server.api/food',
      { method: 'PUT', ...mockHeaders }
    )
  })

  it('should have patch method', () => {
    httpRequest.patch('/food')
    expect(global.fetch).toHaveBeenCalledWith(
      'https://platform.fatsecret.com/rest/server.api/food',
      { method: 'PATCH', ...mockHeaders }
    )
  })

  it('should have headers', () => {
    httpRequest.patch('/food', {
      headers: {
        Authorization: 'Bearer token',
        'Content-Type': 'application/json',
      },
    })
    expect(global.fetch).toHaveBeenCalledWith(
      'https://platform.fatsecret.com/rest/server.api/food',
      {
        method: 'PATCH',
        headers: {
          ...mockHeaders.headers,
          Authorization: 'Bearer ',
          'Content-Type': 'application/json',
        },
      }
    )
  })
})
