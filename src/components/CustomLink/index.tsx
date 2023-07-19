import React from 'react'
import { Link, useLocation, useMatch, useNavigate, useResolvedPath } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { addUrlToHistory, removeFirstUrl } from 'src/store/slices/playlist'

interface Props {
  children: React.ReactNode
  to:string,
  props?:any,
}


const CustomLink = ({ children, to, ...props } : Props) => {
  const navigate = useNavigate()
  const routes = useAppSelector((state) => state.playlist.routes)
  const location = useLocation()
  const dispatch = useAppDispatch()

  return (
    <li
      className={`list-none hover:text-gray-800 active:text-red-600`}
      style={{ cursor: 'pointer' }}
      onClick={() => {
        if(location.pathname !== routes[0]){
          dispatch(removeFirstUrl())
          dispatch(addUrlToHistory(location.pathname))
        }
        navigate(to)
      }}
    >
      <Link className='' to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default CustomLink
