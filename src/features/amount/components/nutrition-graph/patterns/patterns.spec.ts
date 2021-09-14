import { IFood } from '@/features/amount/core/interfaces/food'
import nutrientsFactory from './nutrients-factory'
import { nutrientsStrategy } from './nutrients-strategy'

const items = [
  {
    nf_total_carbohydrate: 2,
    nf_total_fat: 2,
    nf_protein: 2,
  },
  {
    nf_total_carbohydrate: 2,
    nf_total_fat: 2,
    nf_protein: 2,
  },
]

describe('nutrition graph patterns', () => {
  it('should have empty strategy', () => {
    expect(nutrientsStrategy().run()).toEqual({
      carbo: 0,
      fat: 0,
      protein: 0,
    })
  })

  it('should have total strategy', () => {
    expect(nutrientsStrategy('total').run(items as IFood[])).toEqual({
      carbo: 4,
      fat: 4,
      protein: 4,
    })
  })

  it('should have percents strategy', () => {
    const total = nutrientsStrategy('total').run(items as IFood[])
    const percentUnit = 33.333333333333336

    expect(nutrientsStrategy('percents').run(total)).toEqual({
      carbo: percentUnit,
      fat: percentUnit,
      protein: percentUnit,
    })
  })

  it('should have a nutrients factory', () => {
    expect(nutrientsFactory(2, 2, 2)).toEqual({
      carbo: 2,
      fat: 2,
      protein: 2,
    })
  })
})
