import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import { Grid } from '@mui/material'
import { ListPlayer } from './component/ListPlayer'
import VideoPlayer from 'src/components/VideoPlayer'
import BarPlayer from 'src/components/BarPlayer'
import { useAudioPlayer } from 'react-use-audio-player';
import { useQuery } from '@tanstack/react-query'
import playListApi from 'src/apis/playList.api'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { API } from 'src/constants/config'
const Player = () => {
  const { play, pause, stop, playing } = useAudioPlayer()
  // const queryConfig = useQueryConfig()
  const { id } = useParams();

  const handlePlayPause = () => {
      if (playing) {
          pause()
      } else {
          play()
      }
  }

  const { data: playListData } = useQuery({
    queryKey: ['playlist'],
    queryFn: () => {
      return playListApi.getPlayList(`${id}`)
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000

  })

  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API.SONG_INFO_DETAILT_API}?id=${id}`) // Thay đổi URL API của bạn tại đây
        setData(response.data)
      } catch (error) {}
    }

    fetchData()
  }, [])

  const onClick = (value:string) =>{
    console.log(value)
  }
  return (
    <div className='h-screen w-[100vw]'>
      <Grid container spacing={2}>
        <Grid item xs={4} sx={{
          ml:2,
        }}>
          <VideoPlayer playListData={playListData}/>
        </Grid>
        <Grid item xs={7.5}>
          <ListPlayer playListData={playListData} onClick={onClick}/>
        </Grid>
          <BarPlayer />
      </Grid>
    </div>
  )
}

export default Player
