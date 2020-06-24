import React from "react"

const style = {
  width: "100%",
  maxWidth: "736px",
  margin: "0 auto",
}

export default function ({ children, styles, ...otherProps }) {
  return (
    <div style={{ ...style, ...styles }} {...otherProps}>{children}</div>
  )
}