import { useEffect, useRef, useState } from 'react'
import { useAppDispatch } from './useRedux'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { IPath } from 'src/types/types.type'
import pathConfig from 'src/constants/path'
// import { playSong, showPlayerInfo } from "src/utils/utils"

const useRouteHistory = () => {
  const dispatch = useAppDispatch()
  const prePath = useRef<IPath>({})
  const midlePath = useRef<IPath>({})
  const path: IPath = useLocation()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  // const playListId = useAppSelector((state) => state.player?.playListId)

  useEffect(() => {
    midlePath.current = path
    if (path?.pathname !== pathConfig.player) {
      // showPlayerInfo(false)
    } else {
      const id = searchParams.get('id') || ''
      const _idPlayList = searchParams.get('idPlayList') || ''
      // playSong({ id, idPlayList: _idPlayList || "000" })
    }
  }, [path])

  if (midlePath.current?.pathname !== path?.pathname) {
    prePath.current = midlePath.current
  }

  return {
    prePath: prePath.current,
    currentPath: path
  }
}

export default useRouteHistory
