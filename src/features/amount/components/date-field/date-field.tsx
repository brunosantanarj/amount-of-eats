import { DatePicker, DatePickerProps } from 'antd'

import React from 'react'

const DateField = (props: DatePickerProps) => {
  return <DatePicker {...props} placeholder="Filter by day" size="large" />
}

export default DateField
