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
    minHeight: "100vh",
    position: "relative",
    backgroundColor: "transparent"
  },
  header: {
    boxShadow: "0 2px 8px #f0f1f2",
    backgroundColor: "white",
    textAlign: "center",
    padding: "0",

  },
  div: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    position: "relative",
    maxWidth: "292px",
    margin: "0 auto",
  },
  footer: {
  }
}

export default ({ children }) => {

  return (
    <Layout style={styles.layout}>
      <Background/>
      <Header style={styles.header}>
        <AppBar/>
      </Header>
      <Content style={styles.content}>
        {children}
      </Content>
      <Footer style={styles.footer}>
        <VersionTag/>
      </Footer>
    </Layout>
  )
}
