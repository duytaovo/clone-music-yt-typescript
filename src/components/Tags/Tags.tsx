import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { locales } from 'src/i18n/i18n'
interface HeaderItem {
  id: number
  to: string
  title: any
}
export default function Tags() {
  const { t } = useTranslation('home')

  const sidebarLink:HeaderItem[] = [
        {
          title: 'relax',
          id: 1,
          to: '/',
        },
        {
          title: 'recharge',
          id: 2,
          to: '/',
        },
        {
          title: 'doExercise',
          id: 3,
          to: '/',
        },
        {
          title: 'work',
          id: 4,
          to: '/',
        },
        {
          title: 'focus',
          id: 5,
          to: '/',
        },
       
  ]

  const renderListLink = () => {
    return sidebarLink.map((item) => {
      return (
        <Link to={item.to} key={item.id}>
          <div className='text-[#c3cada] opacity-60 hover:opacity-100 cursor-pointer p-2 rounded m-2 bg-[rgba(255,255,255,0.1)]'>
            <span className=' text-white cursor-pointer'>{t(item.title)}</span>
          </div>
        </Link>
      )
    })
  }
  return (
    <div className="flex items-center justify-start">
      {renderListLink()}
    </div>
  )
}
