import React from "react"
import { Typography } from "antd"
import { AntDesignOutlined } from "@ant-design/icons"

const { Title, Link } = Typography

const styles = {
  header: {
    textAlign: "center",
    margin: "40px 0 20px 0",
    width: "100%"
  },
  title: {
    // color: "white",
    marginBottom: "8px",
    letterSpacing: "-0.05px",
    fontWeight: 900,
    fontSize: "32px",
    fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, segoe ui, Roboto, helvetica neue,Arial, noto sans, sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol, noto color emoji, sans-serif"
  },
  link: {
    fontSize: "16px",
    marginBottom: 0,
  }
}

export default _ => (
  <header style={styles.header}>
    <Title style={styles.title}>Vacation Wizard</Title>
    <Link style={styles.link} rel="norefferer noopener" href="https://ant.design/index-cn">made with <AntDesignOutlined/> in Seattle</Link>
  </header>);
