import React from "react"

const styles = {
  div: {
    position: "relative",
    padding: "0 32px",
    borderRadius: "8px",
    backgroundColor: "white",
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
  },
};

function Card({ children }) {
  return (
    <div className={"card"} style={styles.div}>{children}</div>
  )
}

export default Card