import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Layout } from "antd"
import AppBar from "./app-bar"
import VersionTag from "./version-tag"

import "../assets/antd-overrides.css"
import "../assets/transitions.css"
import AnimatedBg from "../assets/animated-bg"

const { Header, Content, Footer } = Layout

const styles = {
  layout: {
    backgroundColor: "transparent",
    minHeight: "100vh"
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

  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `)

  return (
    <Layout style={styles.layout}>
      <AnimatedBg/>
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
