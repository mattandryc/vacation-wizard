import React from "react"
import { Typography } from "antd"
import { AntDesignOutlined } from "@ant-design/icons"

const { Title, Link } = Typography

const styles = {
  section: {
    textAlign: "center",
    marginTop: "6vmin",
    marginBottom: "16px",
    width: "100%"
  },
  title: {
    marginBottom: "8px"
  },
  link: {
    fontSize: "16px"
  }
}

export default _ => (
  <section style={styles.section}>
    <Title style={styles.title}>Vacation Wizard</Title>
    <Link style={styles.link} href={"https://ant.design/index-cn"}>made with <AntDesignOutlined/> in Seattle</Link>
  </section>);
