import React from 'react'
import { NutritionTypes } from '../NutritionTypes'
import * as Styled from '../Styled'

type Props = {
  percents: NutritionTypes
  nutrients: NutritionTypes
}

type NutrientStringType = 'carbo' | 'fat' | 'protein'
type NutrientItemType = { key: NutrientStringType; color: string; text: string }

const nutrientsList: NutrientItemType[] = [
  { key: 'carbo', color: Styled.colors.carbo, text: 'Carbohydrate' },
  { key: 'fat', color: Styled.colors.fat, text: 'Fat' },
  { key: 'protein', color: Styled.colors.protein, text: 'Protein' },
]

const SubtitleGraph = ({ percents, nutrients }: Props) => {
  const createSubtitle = (nutrient: NutrientStringType) =>
    `${nutrients[nutrient].toFixed(2)}g (${percents[nutrient].toFixed(2)}%)`

  return (
    <Styled.Wrapper>
      {nutrientsList.map((nutrient) => (
        <Styled.WrapperNutriet key={nutrient.key} data-testid={nutrient.key}>
          <Styled.Box background={nutrient.color} />
          {nutrient.text} - {createSubtitle(nutrient.key)}
        </Styled.WrapperNutriet>
      ))}
    </Styled.Wrapper>
  )
}

export default SubtitleGraph
