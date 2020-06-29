import React from "react"
import { Layout } from "antd"

import Background from "./background"

import "../assets/antd-overrides.css"
import "../assets/transitions.css"



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
        <Layout.Content style={styles.content}>
          {children}
        </Layout.Content>
      </Layout>
    </Background>
  )
}
