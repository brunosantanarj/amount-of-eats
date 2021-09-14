import { Input } from 'antd'
import { SearchProps } from 'antd/lib/input'
import React from 'react'

const SearchField = (props: SearchProps) => {
  return (
    <Input.Search
      placeholder="Search food"
      allowClear
      enterButton="Search"
      size="large"
      {...props}
    />
  )
}

export default SearchField
