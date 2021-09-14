import React from 'react'
import { IFood } from '../../core/interfaces/food'
import FoodCard from '../food-card'

type Props = {
  foods: IFood[]
  onSaveFood: (food: IFood) => void
}

const ListFood = ({ foods, onSaveFood }: Props) => {
  if (foods.length > 0) {
    return (
      <>
        {foods.map((food) => (
          <FoodCard food={food} onSaveFood={onSaveFood} key={food.ndb_no} />
        ))}
      </>
    )
  }

  return null
}

export default ListFood
