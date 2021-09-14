import React from 'react'
import styled from 'styled-components'
import { NutritionTypes } from '../NutritionTypes'
import * as Styled from '../Styled'

const Svg = styled.svg`
  & * {
    transition: 0.4s;
  }
`

type Props = {
  percents: NutritionTypes
}

const GraphSVG = ({ percents }: Props) => {
  return (
    <Svg width="100%" height="25" role="img">
      <g>
        <rect
          width={`${percents.carbo}%`}
          height="25"
          fill={Styled.colors.carbo}
        ></rect>
      </g>
      <g>
        <rect
          width={`${percents.fat}%`}
          x={`${percents.carbo}%`}
          fill={Styled.colors.fat}
          height="25"
        ></rect>
      </g>
      <g>
        <rect
          width={`${percents.protein}%`}
          height="25"
          x={`${percents.fat + percents.carbo}%`}
          fill={Styled.colors.protein}
        ></rect>
      </g>
    </Svg>
  )
}

export default GraphSVG
