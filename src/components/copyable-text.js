import React from "react"
import { message, Typography } from "antd"
import { CopyToClipboard } from "react-copy-to-clipboard"

const { Text } = Typography

const style = {
  cursor: "copy",
  fontSize: "16px",
  width: "100%"
}

export default function({ text }) {

  const handleCopy = () => {
    message.success("已复制到剪贴板")
  }

  return (<CopyToClipboard text={text} onCopy={handleCopy}><Text style={style}>{text}</Text></CopyToClipboard>)
}
