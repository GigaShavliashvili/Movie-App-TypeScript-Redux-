import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({keyword, text}:{keyword:string, text:string}) => {
  return (
    <Link to={`${keyword}`}>
    <button className="text-danger rounded-pill border-danger btn">{text}</button>
    </Link>
  )
}

export default Button