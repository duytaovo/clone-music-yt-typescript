import { memo, useEffect, useRef, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import './styles.css'
import BarPlayer from 'src/components/BarPlayer'
import { useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { RootState } from 'src/store/store'
import { getPlayList} from 'src/store/slices/playlist'
import { setPlaylistSong } from 'src/store/slices/audio'
import useRouteHistory from 'src/hooks/useRoutesHistory'
import Loading from 'src/components/Loading'
interface Props {
  children?: React.ReactNode
}
function MainLayoutInner({ children }: Props) {
  useRouteHistory()
  const { playlist } = useSelector((state: RootState) => state.playlist)
  const dispatch = useAppDispatch()
  const songDetail = useAppSelector((state) => state.audio.songDetail)

  const { id } = useParams()

  useEffect(() => {
    dispatch(getPlayList(id))
  }, [])

  useEffect(() => {
    ;(async () => {
      dispatch(setPlaylistSong(playlist?.data?.data?.data?.song?.items))
    })()
  }, [playlist, dispatch])


  return (
    <div className='h-100vh bg w-[100vw]'>
      <Loading />
      <Header />
      {/* {children} */}
      <Outlet />
      {/* <div ref={ref} onClick={handleOnClick}> */}
        <BarPlayer songDetail={songDetail} />
      {/* </div> */}
      {/* <Footer /> */}
    </div>
  )
}
const MainLayout = memo(MainLayoutInner)
export default MainLayout
