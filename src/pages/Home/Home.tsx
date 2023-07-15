import { unwrapResult } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from 'src/components/Banner/Banner'
import { Chart } from 'src/components/Chart/Chart'
import Carousel from 'src/components/Carousel/Carousel'
import ItemSongHome from 'src/components/ItemSongHome/ItemSongHome'
import Tags from 'src/components/Tags/Tags'
import { useAppDispatch } from 'src/hooks/useRedux'
import { getChart, getSongs } from 'src/store/slices/song'
import { AppDispatch, RootState } from 'src/store/store'
import { List, Song } from 'src/types/types.type'
import Partner from 'src/components/Partner'

export default function Home() {
  const { songs, error,chart } = useSelector((state: RootState) => state.songs)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getSongs(''))
    dispatch(getChart(''))
  }, [])
  return (
    <div className='container'>
      <Tags />
      {songs.map((song: any, index: number) => (
        <div
          key={index}
        >
          {' '}
          {song.sectionType === 'banner' && <Banner numberItem= {3} song={song} img={''} />}
          {song.sectionType === 'playlist' &&  <Carousel numberItem={4} song={song} img={''}/>}
          {song.sectionType === 'new-release' &&  <ItemSongHome song={song} />}
          </div>
      ))}
      {/* {chart && <Chart chartHome={chart}/> } */}
      <Partner/>
    </div>
  )
}

