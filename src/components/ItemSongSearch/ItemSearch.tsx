import { CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { changeIconPlay, setAutoPlay, setSongId } from 'src/store/slices/audio'

interface PropsSong {}
const ItemSearch = ({ song }: any) => {
  const dispatch = useAppDispatch()
  const songId = useAppSelector((state) => state.audio.songId)
  const isFocus = songId == song?.encodeId

  const onClick = async () => {
    dispatch(setSongId(song?.encodeId || ''))
    dispatch(changeIconPlay(true))
    dispatch(setAutoPlay(true))
  }
  return (
    <div
      onClick={onClick}
      className={`${
        isFocus ? 'bg-[#302639] shadow-box-shadow' : ''
      } group mr-2 flex cursor-pointer items-center justify-start rounded hover:bg-[#302639]`}
    >
      <img src={song?.thumbnail} alt='' className=' h-12 w-12 rounded object-contain group-hover:opacity-50' />
      <div className='p-3 group-hover:text-white'>
        <Typography
          color=''
          sx={{
            fontSize: '16px'
          }}
        >
          {song.title || song.name}
        </Typography>
        <Typography
          color=''
          sx={{
            color: '#A78295',
            fontSize: '14px'
          }}
        >
          {song.artistsNames}
        </Typography>
      </div>
    </div>
  )
}

export default ItemSearch
