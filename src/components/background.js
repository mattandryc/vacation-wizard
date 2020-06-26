import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-background-image'

const styles = {
  img: {
      backgroundSize: "cover"
  }
}

function Background({children}) {


  const data = useStaticQuery(graphql`
      query {
          bg: file(relativePath: { eq: "island-bg.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 1440) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)


  return (
    <Img style={styles.img}           backgroundSize={"cover"}
         fluid={data.bg.childImageSharp.fluid}>{children}</Img>
  )
}

export default Background