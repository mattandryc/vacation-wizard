import React from "react"
import { Divider, message, Typography } from "antd"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { CopyOutlined } from "@ant-design/icons"

const { Text } = Typography

const styles = {
  div: {
    marginBottom: "32px",
    cursor: "copy",
  },
  text: {
    fontSize: "16px",
    width: "100%"
  }
}

export default function({ text, title }) {

  const handleCopy = () => {
    message.success("已复制到剪贴板")
  }

  return (<CopyToClipboard text={text} onCopy={handleCopy}>
    <div style={styles.div}>
      <Divider>{title} <CopyOutlined/></Divider>
      <Text style={styles.text}>{text}</Text>
    </div>
  </CopyToClipboard>)
}
