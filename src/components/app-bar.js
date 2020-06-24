import React from "react"
import ExternalLink from "./external-link"
import { GithubOutlined } from "@ant-design/icons"

import Container from "./container"

const styles = {
  nav: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%"
  },
  icon: {
    fontSize: "20px",
    color: "rgba(0,0,0,.85)"
  }
}

function AppBar() {
  return (
    <Container>
      <nav style={styles.nav}><ExternalLink to="https://github.com/mattandryc/vacation-wizard">
        <GithubOutlined style={styles.icon}/>
      </ExternalLink></nav>
    </Container>
  )
}

export default AppBar