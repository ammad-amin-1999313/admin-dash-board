import React from 'react'

const Button = ({color, bgColor, title, borderRadius, size}) => {
  return (
    <button
      type="button"
      style={{backgroundColor: bgColor, color, borderRadius}}
      className={`text-${size} p-3  hover:drop-shadow-xl`}
    >
      {title}
    </button>
  )
}

export default Button
