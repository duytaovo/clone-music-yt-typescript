import { Box, IconButton } from '@mui/material'
import CustomLink from '../CustomLink'
import Search from '../Search'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import {  useContext, useEffect, useState } from 'react'
import LanguageIcon from '@mui/icons-material/Language'
import { useTranslation } from 'react-i18next'
import { locales } from 'src/i18n/i18n'
import Popover from '@mui/material/Popover'
import './styles.css'
import TransitionsModal from '../Modal'
import { AppContext } from 'src/contexts/app.context'
import { useMutation, useQuery } from '@tanstack/react-query'
import authApi from 'src/apis/auth.api'
import { toast } from 'react-toastify'
import useQueryConfig from 'src/hooks/useQueryConfig'
import songApi from 'src/apis/home.api'
import PopoverSearch from '../Popover'
import ItemSearch from '../ItemSongSearch'

interface HeaderItem {
  id: number
  to: string
  title: any
}
const sidebarLink: HeaderItem[] = [
  {
    title: 'home',
    id: 1,
    to: '/'
  },
  {
    title: 'discover',
    id: 2,
    to: '/explore'
  },
  {
    title: 'library',
    id: 3,
    to: '/library'
  },
  {
    title: 'upgrade',
    id: 4,
    to: '/'
  }
]

export default function Header() {
  const { i18n } = useTranslation()
  const { t } = useTranslation()
  const queryConfig = useQueryConfig()
  const currentLanguage = locales[i18n.language as keyof typeof locales]
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [anchorElProfile, setAnchorElProfile] = useState<HTMLButtonElement | null>(null)
  const { setIsAuthenticated, setProfile, setOpenModal, isAuthenticated } = useContext(AppContext)
  const open = Boolean(anchorEl)
  const openProfile = Boolean(anchorElProfile)
  const id = open ? 'simple-popover' : undefined
  const idProfile = open ? 'profile' : undefined
  const [isScrolled, setIsScrolled] = useState(false)
  const [valueSearch, setValueSearch] = useState('Son tung')

  const handleOpenModal = () => {
    setOpenModal(true)
  }
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClickProfile = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElProfile(event.currentTarget)
  }

  const handleCloseProfile = () => {
    setAnchorElProfile(null)
  }

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
    return sidebarLink.map((item) => {
      return (
        <CustomLink to={item.to} key={item.id}>
          <div className='inline-block px-5 text-[white]'>
            <span className='animate-spin hover:text-blue-500'>{t(item.title)}</span>
          </div>
        </CustomLink>
      )
    })
  }

  const changeLanguage = (lng: 'en' | 'vi') => {
    i18n.changeLanguage(lng)
  }

  const onChange = (value: string) => {
    setValueSearch(value)
  }

  const { data: songSearch } = useQuery({
    queryKey: ['songs_search', valueSearch],
    queryFn: () => {
      return songApi.getSearchSong(valueSearch)
    },
    enabled: valueSearch !== '',
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })
  const logoutMutation = useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      setIsAuthenticated(false)
      setProfile(null)
      toast.success('Đăng xuất thành công 😌😣😏')
    }
  })

  const handleLogout = () => {
    logoutMutation.mutate()
  }

  return (
    <header
      className={`fixed top-0 z-10 box-border flex h-16 w-full items-center justify-between p-4 ${
        isScrolled ? 'scrolled' : ''
      }`}
    >
      <div>
        <img src='https://music.youtube.com/img/on_platform_logo_dark.svg' alt=''></img>
      </div>
      <ul className='item-center flex justify-between'>{renderListLink()}</ul>
      <PopoverSearch
        renderPopover={
          <Box
            sx={{
              width: 400,
              height: '50vh',
              backgroundColor: 'white',
              borderRadius: '5px',
              overflow:'auto',
              scrollBehavior:"smooth",
              scrollbarColor:"revert"
            }}
          >
            <div className='ml-3'>
              <h6 className="font-normal mt-2 p2">Nghệ sĩ 😊😍</h6>
              {songSearch?.data.data.data?.artists.map((song: any, index: number) => (
                <div key={index} className='m-2 ml-0'>
                  <ItemSearch song={song} />
                </div>
              ))}
            </div>
            <div className='ml-3'>
              <h6 className="font-normal">Bài hát 😋😚</h6>
              {songSearch?.data.data.data?.songs.map((song: any, index: number) => (
                <div key={index}>
                  <ItemSearch song={song}  />
                </div>
              ))}
            </div>
            <div className='ml-3'>
              <h6 className="font-normal">Playlist 😍🤪</h6>
              {songSearch?.data.data.data?.playlists.map((song: any, index: number) => (
                <div key={index}>
                  <ItemSearch song={song}  />
                </div>
              ))}
            </div>
          </Box>
        }
      >
        <Search placeholder='Tìm kiếm' onChange={onChange} />
      </PopoverSearch>
      <div className='flex'>
        {isAuthenticated == true ? (
          <div className='flex items-center justify-around'>
            <IconButton
              sx={{
                color: 'white',
                '&:hover': {
                  opacity: [0.9, 0.8, 0.7],
                  color: 'white'
                }
              }}
              onClick={handleClickProfile}
            >
              <div className='mr-2 h-6 w-6 flex-shrink-0'>
                <img
                  src={
                    'https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/358377922_1290654018553376_1336021502511303709_n.jpg?_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qP6EzdUhZOAAX_8mUfW&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfCXEak_ej90-fhvoJ6Z23AhSBQn3I6AjcbJ29Y662zo0w&oe=64C382C5'
                  }
                  alt='avatar'
                  className='h-full w-full rounded-full object-cover'
                />
              </div>
            </IconButton>
            {/* <div>{profile?.email}</div> */}
            <Popover
              id={idProfile}
              open={openProfile}
              anchorEl={anchorElProfile}
              onClose={handleCloseProfile}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
            >
              <div className='relative mr-5 rounded-sm border border-gray-200 bg-white shadow-md'>
                <div className='flex flex-col py-2 pr-2 pl-3'>
                  <button className='py-2 px-3 text-left hover:text-blue-500'>Tài khoản của tôi</button>
                  <button className='mt-2 py-2 px-3 text-left hover:text-blue-500' onClick={handleLogout}>
                    Đăng xuất
                  </button>
                </div>
              </div>
            </Popover>
          </div>
        ) : (
          <IconButton
            sx={{
              color: 'white',
              '&:hover': {
                opacity: [0.9, 0.8, 0.7],
                color: 'white'
              }
            }}
            onClick={handleOpenModal}
          >
            <AccountCircleIcon />
          </IconButton>
        )}
        <div>
          <IconButton
            sx={{
              color: 'white',
              '&:hover': {
                opacity: [0.9, 0.8, 0.7],
                color: 'white'
              }
            }}
            onClick={handleClick}
          >
            <LanguageIcon />
          </IconButton>
          <span className='mx-1 text-white'>{currentLanguage}</span>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
          >
            <div className='relative mr-5 rounded-sm border border-gray-200 bg-white shadow-md'>
              <div className='flex flex-col py-2 pr-2 pl-3'>
                <button className='py-2 px-3 text-left hover:text-blue-500' onClick={() => changeLanguage('vi')}>
                  Tiếng Việt
                </button>
                <button className='mt-2 py-2 px-3 text-left hover:text-blue-500' onClick={() => changeLanguage('en')}>
                  English
                </button>
              </div>
            </div>
          </Popover>
        </div>
      </div>
      <TransitionsModal />
    </header>
  )
}
