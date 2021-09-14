import React from 'react'
import { IFood } from '@/features/amount/core/interfaces/food'
import * as Styled from './Styled'
import { GraphSVG, SubtitleGraph } from './components'
import { nutrientsStrategy } from './patterns'

const NutritionGraph = ({ foods }: { foods: IFood[] }) => {
  const nutriensTotalCount = nutrientsStrategy('total').run(foods)
  const { carbo, fat, protein } = nutriensTotalCount
  const percents = nutrientsStrategy('percents').run({ carbo, protein, fat })

  return (
    <Styled.Container>
      <GraphSVG percents={percents} />
      <SubtitleGraph percents={percents} nutrients={nutriensTotalCount} />
    </Styled.Container>
  )
}

export default NutritionGraph
