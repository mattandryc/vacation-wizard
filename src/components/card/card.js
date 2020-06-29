import React from "react"
import "./card.css"

const styles = {
  div: {
    position: "relative",
    backgroundColor: "white",
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    minWidth: "320px",
    padding: "0 32px",
    height: "100%",
  },
};

function Card({ children }) {
  return (
    <div className={"card"} style={styles.div}>{children}</div>
  )
}

export default Card