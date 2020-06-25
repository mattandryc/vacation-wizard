import React from "react"
import { Typography } from "antd"
import { AntDesignOutlined } from "@ant-design/icons"

const { Title, Link } = Typography

const styles = {
  section: {
    textAlign: "center",
    margin: "40px 0 20px 0",
    width: "100%"
  },
  title: {
    marginBottom: "8px"
  },
  link: {
    fontSize: "16px",
    marginBottom: 0,
  }
}

export default _ => (
  <section style={styles.section}>
    <Title style={styles.title}>Vacation Wizard</Title>
    <Link style={styles.link} rel="norefferer noopener" href="https://ant.design/index-cn">made with <AntDesignOutlined/> in Seattle</Link>
  </section>);
