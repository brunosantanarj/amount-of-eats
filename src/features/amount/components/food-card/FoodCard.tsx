import React from 'react'
import { IFood } from '@/features/amount/core/interfaces/food'
import * as Styled from './Styled'
import { Card, Button } from 'antd'

type Props = {
  food: IFood
  onSaveFood: (food: IFood) => void
}

const FoodCard = ({ food, onSaveFood }: Props) => {
  const { photo, food_name, ...restFood } = food

  function onSave() {
    onSaveFood(food)
  }

  return (
    <Styled.ContainerCard>
      <Styled.ImageFood src={photo.thumb} />
      <Card title={food_name}>
        <p>Quantity: {restFood.tags.quantity}</p>
        <p>Calories: {restFood.nf_calories}</p>
        <p>Carbohydrate: {restFood.nf_total_carbohydrate}g</p>
        <p>Protein: {restFood.nf_protein}g</p>
        <p>Fat: {restFood.nf_total_fat}g</p>
        <Button type="primary" onClick={onSave}>
          Save
        </Button>
      </Card>
    </Styled.ContainerCard>
  )
}

export default FoodCard
