import httpRequest from '@/data-source/http-request'
import { IInstanteResponse } from '../core/interfaces/food'

export class FoodService {
  async getFood(term: string): Promise<IInstanteResponse[]> {
    try {
      const request = await httpRequest.post('natural/nutrients', {
        body: JSON.stringify({ query: term }),
        headers: {
          'x-remote-user-id': '0',
        },
      })

      if (request.ok) {
        const response = await request.json()
        return response.foods || []
      }

      throw Error('')
    } catch {
      return []
    }
  }
}
