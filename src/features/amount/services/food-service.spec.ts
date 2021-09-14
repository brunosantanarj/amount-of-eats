import { FoodService } from './food-service'

const globalFech = global.fetch as any

describe('FoodService', () => {
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

  it('food service should return array when term is not found', () => {
    expect(new FoodService().getFood('')).resolves.toEqual([])
  })
})
