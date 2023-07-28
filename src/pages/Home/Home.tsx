import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Banner from 'src/components/Banner/Banner'
import { Chart } from 'src/components/Chart/Chart'
import Carousel from 'src/components/Carousel/Carousel'
import ItemSongHome from 'src/components/ItemSongHome/ItemSongHome'
import Tags from 'src/components/Tags/Tags'
import { useAppDispatch } from 'src/hooks/useRedux'
import { getChart, getSongs } from 'src/store/slices/song'
import { RootState } from 'src/store/store'
import Partner from 'src/components/Partner'
import Loading from '../../components/Skeleton/Loading'
import { changePercentLoading } from 'src/app.slice'
import { Helmet } from 'react-helmet-async'

export default function Home() {
  const { songs, chart } = useSelector((state: RootState) => state.songs)
  const { value } = useSelector((state: RootState) => state.loading)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const getData = async () => {
      dispatch(changePercentLoading(30))
      await dispatch(getSongs(''))
      dispatch(changePercentLoading(70))

      await dispatch(getChart(''))
      dispatch(changePercentLoading(100))
    }
    getData()
  }, [dispatch])

  return (
    <div className='container'>
       <Helmet>
        <title>Trang chủ | Music Youtube By Võ Duy Tạo</title>
        <meta name='description' content='Trang profile cá nhân' />
      </Helmet>
      <Tags />
      {value < 100 ? (
        // <Sekeleton />
        <div>
          <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
            <Loading styles={{ height: '25vh' }} children={undefined} className={undefined} />
            <Loading styles={{ height: '25vh' }} children={undefined} className={undefined} />
            <Loading styles={{ height: '25vh' }} children={undefined} className={undefined} />
          </div>
          <div className='flex flex-wrap items-center justify-between'>
            <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
              <Loading styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
              <Loading styles={{ height: '48px', width: '220px' }} children={undefined} className={undefined} />
            </div>
            <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
              <Loading styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
              <Loading styles={{ height: '48px', width: '220px' }} children={undefined} className={undefined} />
            </div>
            <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
              <Loading styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
              <Loading styles={{ height: '48px', width: '220px' }} children={undefined} className={undefined} />
            </div>
            <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
              <Loading styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
              <Loading styles={{ height: '48px', width: '220px' }} children={undefined} className={undefined} />
            </div>
            <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
              <Loading styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
              <Loading styles={{ height: '48px', width: '220px' }} children={undefined} className={undefined} />
            </div>
            <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
              <Loading styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
              <Loading styles={{ height: '48px', width: '220px' }} children={undefined} className={undefined} />
            </div>
            <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
              <Loading styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
              <Loading styles={{ height: '48px', width: '220px' }} children={undefined} className={undefined} />
            </div>
            <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
              <Loading styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
              <Loading styles={{ height: '48px', width: '220px' }} children={undefined} className={undefined} />
            </div>
          </div>
          <div className='' style={{ display: 'flex', gap: 31, paddingTop: 32, flexWrap: 'wrap' }}>
            <Loading styles={{ height: '20vh', width: '20vw' }} children={undefined} className={undefined} />
            <Loading styles={{ height: '20vh', width: '20vw' }} children={undefined} className={undefined} />
            <Loading styles={{ height: '20vh', width: '20vw' }} children={undefined} className={undefined} />
            <Loading styles={{ height: '20vh', width: '20vw' }} children={undefined} className={undefined} />
            <Loading styles={{ height: '20vh', width: '20vw' }} children={undefined} className={undefined} />
            <Loading styles={{ height: '20vh', width: '20vw' }} children={undefined} className={undefined} />
            <Loading styles={{ height: '20vh', width: '20vw' }} children={undefined} className={undefined} />
            <Loading styles={{ height: '20vh', width: '20vw' }} children={undefined} className={undefined} />
          </div>
        </div>
      ) : (
        <div>
          {songs?.map((song: any, index: number) => (
            <div key={index}>
              {' '}
              {song.sectionType === 'banner' && <Banner numberItem={3} song={song} img={''} />}
              {song.sectionType === 'playlist' && <Carousel numberItem={5} song={song} img={''} />}
              {song.sectionType === 'new-release' && <ItemSongHome song={song} />}
            </div>
          ))}
          <Chart chartHome={chart} />
          {<Partner />}
        </div>
      )}
    </div>
  )
}
