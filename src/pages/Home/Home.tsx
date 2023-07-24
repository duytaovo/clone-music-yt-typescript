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
import Sekeleton from 'src/components/Skeleton'
import Loading from '../Loading/Loading'

export default function Home() {
  const { songs, chart } = useSelector((state: RootState) => state.songs)
  const { loading } = useSelector((state: RootState) => state.loading)
  const [dataSongFrLocal, setDataSongFrLocal] = useState([])
  const [dataChartFrLocal, setDataChartFrLocal] = useState([])
  const dispatch = useAppDispatch()
  useEffect(() => {
    const getData = async () => {
      // const cachedDataSong = localStorage.getItem('cachedDataSong')
      // const cachedDataChart = localStorage.getItem('cachedDataChart')
      // if (cachedDataSong && cachedDataSong?.length > 0 && cachedDataChart) {
      //   const parsedDataSong = JSON.parse(cachedDataSong)
      //   const parsedDataChart = JSON.parse(cachedDataChart)
      //   setDataSongFrLocal(parsedDataSong)
      //   setDataChartFrLocal(parsedDataChart)
      // } else {
      await dispatch(getSongs(''))
      await dispatch(getChart(''))
      //   localStorage.setItem('cachedDataSong', JSON.stringify(songs))
      //   localStorage.setItem('cachedDataChart', JSON.stringify(chart))
      // }
    }
    getData()
  }, [dispatch])

  return (
    <div className='container'>
      <Tags />
      {/* <Loading styles={{ width: '100%', height: '5vh', margin: '20px 0' }} /> */}
      {loading > 0 ? (
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
              <Loading styles={{ height: '48px', width: '200px' }} children={undefined} className={undefined} />
            </div>
            <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
              <Loading styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
              <Loading styles={{ height: '48px', width: '200px' }} children={undefined} className={undefined} />
            </div>
            <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
              <Loading styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
              <Loading styles={{ height: '48px', width: '200px' }} children={undefined} className={undefined} />
            </div>
            <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
              <Loading styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
              <Loading styles={{ height: '48px', width: '200px' }} children={undefined} className={undefined} />
            </div>
            <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
              <Loading styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
              <Loading styles={{ height: '48px', width: '200px' }} children={undefined} className={undefined} />
            </div>
            <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
              <Loading styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
              <Loading styles={{ height: '48px', width: '200px' }} children={undefined} className={undefined} />
            </div>
            <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
              <Loading styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
              <Loading styles={{ height: '48px', width: '200px' }} children={undefined} className={undefined} />
            </div>
            <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
              <Loading styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
              <Loading styles={{ height: '48px', width: '200px' }} children={undefined} className={undefined} />
            </div>
          </div>
          <div className='' style={{ display: 'flex', gap: 31, paddingTop: 32,flexWrap:"wrap" }}>
            <Loading styles={{ height: '20vh', width: "20vw" }} children={undefined} className={undefined} />
            <Loading styles={{ height: '20vh', width: "20vw" }} children={undefined} className={undefined} />
            <Loading styles={{ height: '20vh', width: "20vw" }} children={undefined} className={undefined} />
            <Loading styles={{ height: '20vh', width: "20vw" }} children={undefined} className={undefined} />
            <Loading styles={{ height: '20vh', width: "20vw" }} children={undefined} className={undefined} />
            <Loading styles={{ height: '20vh', width: "20vw" }} children={undefined} className={undefined} />
            <Loading styles={{ height: '20vh', width: "20vw" }} children={undefined} className={undefined} />
            <Loading styles={{ height: '20vh', width: "20vw" }} children={undefined} className={undefined} />
           
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
