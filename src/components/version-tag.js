import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Typography } from "antd"
import Container from "./container"

const { Text } = Typography

function VersionTag() {
  const data = useStaticQuery(graphql`
      query SiteVersionQuery {
          site {
              siteMetadata {
                  version
              }
          }
      }
  `)

  return (
    <Container styles={{ textAlign: "right" }}>
      <Text style={{ fontSize: "16px", opacity: .5 }}>
        version {data.site.siteMetadata.version}
      </Text>
    </Container>
  )
}

export default VersionTag