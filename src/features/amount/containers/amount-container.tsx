import React, { useState } from 'react'
import {
  SearchField,
  ListFood,
  TableFoods,
  NutritionGraph,
  DateField,
} from '@/features/amount/components'
import { FoodService } from '../services/food-service'
import { IFood } from '../core/interfaces/food'

const AmountContainer = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [intakeFoods, setIntakeFood] = useState([])
  const [listFoods, setListFoods] = useState([])

  function onSaveFood(food: IFood) {
    setIntakeFood((currentState) => [...currentState, food])
  }

  const onSearch = async (term: string) => {
    setIsFetching(true)
    const list = await new FoodService().getFood(term)
    setIsFetching(false)
    setListFoods(list)
  }

  function onRemoveFood({ food_name }: IFood) {
    setIntakeFood((currentState) =>
      currentState.filter((food: IFood) => food.food_name !== food_name)
    )
  }

  /**
   * TO-DO: Implement Method
   * Unexpected any = antd library uses Moment */
  function onFilterByDate() {
    return
  }

  return (
    <>
      <SearchField onSearch={onSearch} loading={isFetching} />
      <ListFood foods={listFoods} onSaveFood={onSaveFood} />
      {intakeFoods.length > 0 ? (
        <>
          <DateField onChange={onFilterByDate} />
          <NutritionGraph foods={intakeFoods} />
          <TableFoods foods={intakeFoods} onRemove={onRemoveFood} />
        </>
      ) : null}
    </>
  )
}

export default AmountContainer
