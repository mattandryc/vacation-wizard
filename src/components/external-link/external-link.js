import React from "react"
import "./external-link.css";

export default function({ to, children }) {
  return (
    <a href={to} target="_blank" rel="norefferer noopener">{children}</a >
  )
}

