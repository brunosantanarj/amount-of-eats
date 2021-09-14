import { IFood } from '@/features/amount/core/interfaces/food'
import { NutritionTypes } from '../NutritionTypes'
import nutrientsFactory from './nutrients-factory'

type strategiesTypes = 'percents' | 'total'
type strategyRunParam = NutritionTypes | IFood[]
type strategyRunType = (
  params: strategyRunParam
) => ReturnType<typeof nutrientsFactory>
type strategyMapperType = Map<strategiesTypes, strategyRunType>

function emptyStrategy() {
  return { carbo: 0, fat: 0, protein: 0 }
}

function percentsStrategy(nutrients: strategyRunParam) {
  if (!Array.isArray(nutrients)) {
    const { fat, carbo, protein } = nutrients
    const total = fat + carbo + protein
    const convertToPercent = (nutrient: number) => (nutrient * 100) / total

    return {
      carbo: convertToPercent(carbo),
      protein: convertToPercent(protein),
      fat: convertToPercent(fat),
    }
  }
}

function totalCountStragegy(nutrients: strategyRunParam) {
  if (Array.isArray(nutrients) && nutrients.length > 0) {
    return nutrients.reduce(
      (acc, cv) => ({
        ...acc,
        carbo: acc.carbo + cv.nf_total_carbohydrate,
        fat: acc.fat + cv.nf_total_fat,
        protein: acc.protein + cv.nf_protein,
      }),
      emptyStrategy()
    )
  }
}

const nutrientsMapper: strategyMapperType = new Map([
  ['percents', percentsStrategy],
  ['total', totalCountStragegy],
])

export const nutrientsStrategy = (type?: strategiesTypes) => ({
  run(params?: strategyRunParam) {
    if (!type && !params) {
      return emptyStrategy()
    }

    return nutrientsMapper.get(type)(params) || emptyStrategy()
  },
})
