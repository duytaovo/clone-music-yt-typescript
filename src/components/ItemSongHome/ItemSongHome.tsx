import { CardContent, Grid, Typography } from '@mui/material'
import React, { memo, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { changeIconPlay, setAutoPlay, setSongId } from 'src/store/slices/audio'
import Loader from '../Loader'

interface PropsSong {
  encodeId?: string | undefined
  thumbnail?: string
  title?: string
  artistsNames?: string
}

const Component = (song: any) => {
  const dispatch = useAppDispatch()
  const songId = useAppSelector((state) => state.audio.songId)
  const isFocus = songId == song.song?.encodeId
  const {isLoading} = useAppSelector((state) => state.audio)
  const onClick = async () => {
    await dispatch(setSongId(song.song?.encodeId))
    dispatch(changeIconPlay(true))
    dispatch(setAutoPlay(true))
  }
  return (
    <div
      onClick={onClick}
      className={`m-2 flex w-[25vw] cursor-pointer rounded hover:bg-[#302639] ${
        isFocus ? 'bg-[#302639] shadow-box-shadow' : ''
      } group ml-3.5 w-max cursor-pointer flex-wrap items-center justify-start text-[white] hover:text-blue-500`}
    >
      <div className='relative'>
        <img
          src={song.song.thumbnail}
          alt=''
          className='relative ml-2 h-12 w-12 rounded object-contain group-hover:opacity-50'
        />
        {isFocus && isLoading == true && (
          <div
            className='
      absolute  left-[40px] top-[25px] z-10  translate-x-[-50%] translate-y-[-50%]
      '
          >
            <Loader />
          </div>
        )}
      </div>
      <div className='p-2 w-[20vw]'>
        <Typography
          variant='body2'
          color=''
          sx={{
            fontSize: '16px'
          }}
        >
          {song.song.title}
        </Typography>
        <Typography
          variant='body2'
          color=''
          sx={{
            color: '#A78295',
            fontSize: '14px'
          }}
        >
          {song.song.artistsNames}
        </Typography>
      </div>
    </div>
  )
}

const ItemSongHome = ({ song }: any) => {
  const renderListSong = (a: number, b: number) => {
    return (
      <Grid item xs={4} lg={4}>
        {song?.items.all?.slice(a, b)?.map((song: PropsSong, index: number) => (
          <Component song={song} key={song.encodeId} />
        ))}
      </Grid>
    )
  }
  return (
    <div>
      <h4 className='p-6  pl-3 font-sans text-[28px] font-semibold text-[#fff] line-clamp-1'>{song.title}</h4>
      <Grid container spacing={2}>
        <Grid item md={4}>
          {renderListSong(0, 4)}
        </Grid>
        <Grid item md={4}>
          {renderListSong(6, 10)}
        </Grid>
        <Grid item md={4}>
          {renderListSong(11, 15)}
        </Grid>
      </Grid>
    </div>
  )
}

export default memo(ItemSongHome)
