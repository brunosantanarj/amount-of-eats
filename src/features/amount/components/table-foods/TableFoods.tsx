import React from 'react'
import { Table, Button } from 'antd'
import { formatDateToPT } from '@/helpers/format/date'
import { IFood } from '@/features/amount/core/interfaces/food'

type IntakedFoods = IFood & { created_at: Date }

type Props = {
  foods: IntakedFoods[]
  onRemove: (food: IFood) => void
}

const columns = [
  {
    title: 'Food name',
    dataIndex: 'food_name',
    key: 'food_name',
  },
  {
    title: 'Carbohydrate(g)',
    dataIndex: 'nf_total_carbohydrate',
    key: 'nf_total_carbohydrate',
  },
  {
    title: 'Protein(g)',
    dataIndex: 'nf_protein',
    key: 'nf_protein',
  },
  {
    title: 'Fat(g)',
    dataIndex: 'nf_total_fat',
    key: 'nf_total_fat',
  },
  {
    title: 'Consumed At',
    dataIndex: 'consumed_at',
    key: 'consumed_at',
    sorter: true,
    render: (consumed_at) => formatDateToPT(new Date(consumed_at)),
  },
]

const TableFoods = ({ foods, onRemove }: Props) => {
  const removeColumn = {
    title: 'Action',
    key: 'action',
    render: (food) => (
      <Button type="primary" danger onClick={() => onRemove(food)}>
        Remove
      </Button>
    ),
  }

  return (
    <Table
      columns={[...columns, removeColumn]}
      dataSource={foods}
      pagination={false}
    />
  )
}

export default TableFoods
