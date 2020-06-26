import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import PropTypes from "prop-types"
import useWindowSize from "../hooks/useWindowSize"

const styles = {
  img: {
    position: "fixed",
    top: 0,
    left: 0,
    minWidth: "100%",
    minHeight: "100%",
    zIndex: -1,
  }
}

function Background() {

  const { width } = useWindowSize();

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
   <Img style={styles.img} fluid={data.bg.childImageSharp.fluid} />
  )
}

export default Background