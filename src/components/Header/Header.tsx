import { IconButton } from '@mui/material'
import CustomLink from '../CustomLink'
import Search from '../Search'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useEffect, useState } from 'react'

import './styles.css'

export default function Header() {
  const sidebarLink = [
    {
      list_top: [
        {
          tiltle: 'Trang chủ',
          id: 1,
          to: '/'
        },
        {
          tiltle: 'Khám phá',
          id: 2,
          to: '/explore'
        },
        {
          tiltle: 'Thư viện',
          id: 3,
          to: '/library'
        },
        {
          tiltle: 'Nâng cấp',
          id: 4,
          to: '/'
        }
      ]
    }
  ]

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset

      if (scrollTop > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const renderListLink = () => {
    return sidebarLink[0].list_top.map((item) => {
      return (
        <CustomLink to={item.to} key={item.id}>
          <div className='inline-block text-[#c3cada] px-5'>
            <span className='animate-spin hover:text-blue-500'>{item.tiltle}</span>
          </div>
        </CustomLink>
      )
    })
  }

  const onChange = () => {}

  return (
    <header
      className={`fixed top-0 z-10 box-border flex h-16 w-full items-center justify-between p-4 ${
        isScrolled ? 'scrolled' : ''
      }`}
    >
      <div>
        <img src='https://music.youtube.com/img/on_platform_logo_dark.svg' alt=''></img>
      </div>
      <ul className="flex item-center justify-between">{renderListLink()}</ul>
      <Search placeholder='Tìm kiếm' onChange={onChange} />
      <IconButton sx={{ color: 'white' }}>
        <AccountCircleIcon />
      </IconButton>
    </header>
  )
}
