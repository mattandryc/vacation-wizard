import React from "react"
import { DatePicker } from "antd"
import locale from "antd/es/date-picker/locale/zh_CN"


const { RangePicker } = DatePicker

const style = {
  width: "100%",
}

const dateFormat = "MM月DD日"

export default function({ name, placeholder, ...otherProps }) {
  return (
    <RangePicker
      locale={locale}
      placeholder={placeholder}
      style={style}
      format={dateFormat}
      size="large"
      inputReadOnly={true}
      {...otherProps}
    />
  )
}