import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  children: React.ReactNode
  to:string,
  props?:any,
}


const CustomLink = ({ children, to, ...props } : Props) => {
  return (
    <li
      className={`list-none hover:text-gray-800 `}
      style={{ cursor: 'pointer' }}
    >
      <Link className='' to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default CustomLink
