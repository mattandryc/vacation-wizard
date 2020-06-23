import React from "react"
import { DatePicker } from "antd"
import locale from "antd/es/date-picker/locale/zh_CN"

const style = {
  width: "100%"
}

const dateFormats = {
  startDate: "MM月DD日（开始）",
  endDate: "MM月DD日（结束）"
}

const laterThanEndDate = (endDate, current) => current && endDate && current > endDate.endOf("day")

const earlierThanStartDate = (startDate, current) => current && startDate && current < startDate.endOf("day")

export default function({ name, placeholder, onDateChange, variant, startDate, endDate, ...otherProps }) {

  const handleChange = onDateChange.bind(null, variant)
  const disabled = variant === "endDate" && !startDate

  const disabledDate = variant === "endDate"
    ? earlierThanStartDate.bind(null, startDate)
    : laterThanEndDate.bind(null, endDate)

  return (
    <DatePicker
      placeholder={placeholder}
      format={dateFormats[variant]}
      locale={locale}
      style={style}
      disabled={disabled}
      disabledDate={disabledDate}
      size="large"
      {...otherProps}
      onChange={handleChange}
    />
  )
}