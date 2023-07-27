import React, { useState } from "react"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useAppDispatch, useAppSelector } from "src/hooks/useRedux";
import { changeIconPlay, setCurrnetIndexPlaylist, setSongDetail, setSongId } from "src/store/slices/audio";
import { RootState } from "src/store/store";
const PreviousControl = () => {

  const playlistSong:any = useAppSelector((state) => state.audio.playlistSong)

  let { currnetIndexPlaylist } = useAppSelector((state: RootState) => state.audio)
  const [randomIndex, setRandomIndex] = useState<number[]>([])
  const list = new Set(randomIndex) // List save random currentIndex and reset at full
  const dispatch = useAppDispatch()

  const handleSetIndexChange = (currentIndex: number) => {
    dispatch(setCurrnetIndexPlaylist(currentIndex))
    dispatch(setSongDetail(playlistSong[currentIndex]))
    dispatch(setSongId(
      playlistSong[currentIndex].encodeId
    ))
    dispatch(changeIconPlay(true))
  }
  //handle random
  const handleRandom = (index: number) => {
    let random: number
    const songsLength = playlistSong.length
    do {
      random = Math.ceil(Math.random() * playlistSong.length)
      setRandomIndex((prev) => [...prev, random])
    } while (list.has(random))
    currnetIndexPlaylist = random
    setRandomIndex((prev) => [...prev, index])

    if (list.size === songsLength - 1) {
      setRandomIndex([])
    }
  }

  const handlePreSong = () => {
    if(playlistSong !== undefined && playlistSong.length > 0) {
      let currentIndex
      if(currnetIndexPlaylist === 0) {
        currentIndex = 0
      } else {
        Number(localStorage.getItem('isRandom')) == 1 && handleRandom(currnetIndexPlaylist) 
        currentIndex = currnetIndexPlaylist - 1
      }
      handleSetIndexChange(currentIndex);
    }
  }

  return (
    <button
      onClick={handlePreSong}
      className="mx-2 my-0 " title="Previous Song"
    >
      <ArrowBackIosIcon  sx={{
        // color:'white',
        width:"24px",
        height:"24px"
      }}/>
    </button>
  )
}

export default PreviousControl