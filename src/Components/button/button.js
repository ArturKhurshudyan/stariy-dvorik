import classNames from 'classnames'
import React from 'react'
import "./button.css"


export default function Button({
    onClick,
    type,
    children,
    
}) {
    const btnClass = classNames({
        "btn": true,
        "btn--secondary": type === "secondary",
        "btn--primary": type === "primary",
        
    })
  return (
    <button className={btnClass} onClick={onClick}>
        {children}
    </button>
  )
}
