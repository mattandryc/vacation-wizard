import React from "react"

export default function({ to, icon, children, className }) {
  return (
    <a href={to} target="_blank" rel="noopener noreferrer">
      <div className={`ant-btn ant-btn-primary ant-btn-lg ${className}`}><span>
                {children}</span>{icon}
      </div>
    </a>
  )
}

