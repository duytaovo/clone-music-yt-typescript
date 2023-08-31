import React, { memo, useContext, useEffect, useRef } from 'react'
import { Grid } from '@mui/material'
import { ListPlayer } from './component/ListPlayer'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { getPlayList } from 'src/store/slices/playlist'
import { setPlaylistSong, setSongId } from 'src/store/slices/audio'
import { AppContext } from 'src/contexts/app.context'
import { changePercentLoading } from 'src/app.slice'
import { Helmet } from 'react-helmet-async'
import { SongDetailConfig } from 'src/types/types.type'
import useQueryConfig from 'src/hooks/useQueryConfig'
import path from 'src/constants/path'
import VideoPlayerSong from 'src/components/VideoPlayer/VideoPlayer'

const Player = () => {
  const { playlist, idPlayList } = useSelector((state: RootState) => state.playlist)
  // const { nameId } = useSelector((state: RootState) => state.audio)
  const { value } = useSelector((state: RootState) => state.loading)
  const dispatch = useAppDispatch()
  const songDetail = useAppSelector((state) => state.audio.songDetail)
  const { isPlaying, setPlaying } = useContext(AppContext)
  const lyrRef = useRef<HTMLDivElement>(null)
  const queryConfig = useQueryConfig()
  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      dispatch(changePercentLoading(30))
      await dispatch(getPlayList(idPlayList))
      navigate({
        pathname: path.player,
        search: createSearchParams({ ...queryConfig, idPlayList }).toString()
      })
      dispatch(changePercentLoading(100))
    }

    getData()
  }, [])

  useEffect(() => {
    ;(async () => {
      dispatch(setPlaylistSong(playlist?.data?.data?.data?.song?.items))
    })()
  }, [playlist, dispatch])

  const onClick = (value: string) => {
    dispatch(setSongId(value))
  }

  const handleCloseLyric = async () => {
    if (isPlaying == true) {
      if (lyrRef.current) {
        lyrRef.current.classList.remove('animate-[playlist-up_1s]')
        lyrRef.current.classList.add('animate-[playlist-down_1s]')
      }
      setTimeout(() => {
        setPlaying(false)
      }, 1000)
    } else {
      setPlaying(true)
    }
  }

  return (
    <div
      className={
        ' inset-0 h-screen transition-all duration-300 ease-in-out ' + (isPlaying ? 'animate-[playlist-up_1s]' : '')
      }
      ref={lyrRef}
    >
      <Helmet>
        <title>PlayList | Music Youtube By Võ Duy Tạo</title>
        <meta name='description' content='Trang play list phát nhạc' />
      </Helmet>

      <Link to={'/'}>
        <button
          className='fixed top-6 right-6 mx-3 my-3 cursor-pointer rounded-[25%] bg-transparent p-2 transition-all duration-200 hover:bg-[#c3cada]'
          title='Close'
          onClick={handleCloseLyric}
        >
          {/* <ArrowDropDownIcon
            sx={{
              color: 'white',
              width: '30px',
              height: '30px'
            }}
          /> */}
        </button>
      </Link>
      <Grid
        container
        spacing={2}
        sx={{
          mt: 2
        }}
      >
        <Grid
          item
          xs={4}
          sx={{
            ml: 2
          }}
        >
          {<VideoPlayerSong playListData={playlist} songThumbnail={songDetail} />}
        </Grid>
        <Grid item xs={7.5}>
          {<ListPlayer onClick={onClick} valueLoading={value} />}
        </Grid>
      </Grid>
      {/* <BarPlayer songDetail={songDetail}/> */}
    </div>
  )
}

export default memo(Player)
