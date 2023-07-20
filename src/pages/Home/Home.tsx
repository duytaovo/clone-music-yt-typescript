import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Banner from 'src/components/Banner/Banner'
import { Chart } from 'src/components/Chart/Chart'
import Carousel from 'src/components/Carousel/Carousel'
import ItemSongHome from 'src/components/ItemSongHome/ItemSongHome'
import Tags from 'src/components/Tags/Tags'
import { useAppDispatch } from 'src/hooks/useRedux'
import { getChart, getSongs} from 'src/store/slices/song'
import { RootState } from 'src/store/store'
import Partner from 'src/components/Partner'
import Sekeleton from 'src/components/Skeleton'

export default function Home() {
  const { songs, chart } = useSelector((state: RootState) => state.songs)
  const { loading } = useSelector((state: RootState) => state.loading)
  const [dataSongFrLocal,setDataSongFrLocal] = useState([])
  const [dataChartFrLocal,setDataChartFrLocal] = useState([])
  const dispatch = useAppDispatch()
  useEffect(() => {
    
    const a = (async() =>{
      const cachedDataSong = localStorage.getItem('cachedDataSong')
      const cachedDataChart = localStorage.getItem('cachedDataChart')
      if (cachedDataSong && cachedDataSong?.length > 0 && cachedDataChart) {
        const parsedDataSong = JSON.parse(cachedDataSong)
        const parsedDataChart = JSON.parse(cachedDataChart)
        setDataSongFrLocal(parsedDataSong)
        setDataChartFrLocal(parsedDataChart)
      } else {
        await dispatch(getSongs(''))
        await dispatch(getChart(''))
        localStorage.setItem('cachedDataSong', JSON.stringify(songs))
        localStorage.setItem('cachedDataChart', JSON.stringify(chart))
      }
    })
    a()
  }, [dispatch])

  return (
    <div className='container'>
      <Tags />
      {loading > 0 ? (
        <Sekeleton />
      ) : (
        <div>
          {dataSongFrLocal?.map((song: any, index: number) => (
            <div key={index}>
              {' '}
              {song.sectionType === 'banner' && <Banner numberItem={3} song={song} img={''} />}
              {song.sectionType === 'playlist' && <Carousel numberItem={5} song={song} img={''} />}
              {song.sectionType === 'new-release' && <ItemSongHome song={song} />}
            </div>
          ))}
          <Chart chartHome={dataChartFrLocal} />
          {<Partner />}
        </div>
      )}
    </div>
  )
}
