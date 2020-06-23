import React from "react"
import { Input } from "antd"

const style = {
  width: "100%",
}

export default ({ placeholder, icon, ...otherProps }) => {
  return (
    <Input
      placeholder={placeholder}
      suffix={icon}
      style={style}
      size="large"
      {...otherProps}
    />
  )
}
