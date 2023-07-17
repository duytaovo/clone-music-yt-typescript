import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { ListPlayer } from './component/ListPlayer'
import VideoPlayer from 'src/components/VideoPlayer'
import BarPlayer from 'src/components/BarPlayer'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { useAppDispatch } from 'src/hooks/useRedux'
import { getPlayList, getSongDetail, getSongSound } from 'src/store/slices/playlist'
import { unwrapResult } from '@reduxjs/toolkit'
import { setPlaylistSong } from 'src/store/slices/audio'

const Player = () => {
  const { playlist } = useSelector((state: RootState) => state.playlist)
  const dispatch = useAppDispatch()
  const [idSongDetail, setIdSongDetail] = useState("")
  const [songSound, setSongSound] = useState<any>()
  const [songDetail, setSongDetail] = useState<any>()
  const { id } = useParams();
  
  useEffect(() => {
    dispatch(getPlayList(id))
  }, [])

  useEffect(() => {
    (
      async () => {
          dispatch(setPlaylistSong(playlist?.data?.data?.data?.song?.items))
      }
    )()
  }, [playlist, dispatch])

  useEffect(() => {
    dispatch(getSongSound(idSongDetail)).then(unwrapResult).then(res => setSongSound(res?.data?.data?.data['128']))
    dispatch(getSongDetail(idSongDetail)).then(unwrapResult).then(res => setSongDetail(res?.data?.data?.data))
    
  }, [idSongDetail])

  const onClick = (value:string) =>{
    setIdSongDetail(value)
  }
  return (
    
    <div className='h-screen w-[100vw]'>
      <Grid container spacing={2}>
        <Grid item xs={4} sx={{
          ml:2,
        }}>
         {<VideoPlayer playListData={playlist} songThumbnail={songDetail}/>}
        </Grid>
        <Grid item xs={7.5}>
         {<ListPlayer playListData={playlist} onClick={onClick}/>}
        </Grid>
      </Grid>
        <BarPlayer audioUrl={songSound} idSongDetail={idSongDetail} songDetail={songDetail} playlist={playlist}/>
    </div>
  )
}

export default Player
