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
import Partner from 'src/components/Partner'
import Sekeleton from 'src/components/Skeleton'

export default function Home() {
  const { songs, error,chart } = useSelector((state: RootState) => state.songs)
  const { loading} = useSelector((state: RootState) => state.loading)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getSongs(''))
    dispatch(getChart(''))
  }, [])

  console.log(chart)
  return (
    <div className='container'>
      <Tags />
      {songs.map((song: any, index: number) => (
        <div
          key={index}
        >
          {' '}
          {song.sectionType === 'banner' && <Banner numberItem= {3} song={song} img={''} />}
          {song.sectionType === 'playlist' &&  <Carousel numberItem={5} song={song} img={''}/>}
          {song.sectionType === 'new-release' &&  <ItemSongHome song={song} />}
          </div>
      ))}
      {
        loading>0 ? <Sekeleton/> : <Chart chartHome={chart}/>
      }
      {songs && <Partner/>}
    </div>
  )
}

