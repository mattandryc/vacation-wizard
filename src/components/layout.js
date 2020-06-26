import React from "react"
import { Layout } from "antd"

import Background from "./background"
import AppBar from "./app-bar"
import VersionTag from "./version-tag"

import "../assets/antd-overrides.css"
import "../assets/transitions.css"


const { Header, Content, Footer } = Layout

const styles = {
  layout: {
    backgroundColor: "transparent",
    // backgroundColor: "green",
    minHeight: "100vh"
  },
  content: {
    // backgroundColor: "blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"

  },
  footer: {}
}

export default ({ children }) => {

  return (
    <Background>
      <Layout style={styles.layout}>
        <Content style={styles.content}>
          {children}
        </Content>
      </Layout>
    </Background>
  )
}
