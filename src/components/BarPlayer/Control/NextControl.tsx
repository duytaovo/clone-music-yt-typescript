import React, { useState } from "react"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useAppDispatch, useAppSelector } from "src/hooks/useRedux";
import { changeIconPlay, setCurrnetIndexPlaylist, setSongDetail, setSongId } from "src/store/slices/audio";
import { RootState } from "src/store/store";
const NextControl: React.FC = () => {
  const playlistSong:any = useAppSelector((state) => state.audio.playlistSong)

  let { currnetIndexPlaylist } = useAppSelector((state: RootState) => state.audio)
  const [randomIndex, setRandomIndex] = useState<number[]>([])
  const list = new Set(randomIndex) 
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
    } while (list.has(random))
    currnetIndexPlaylist = random
    setRandomIndex((prev) => [...prev, index])

    if (list.size === songsLength - 1) {
      setRandomIndex([])
    }
  }

  const handleNextSong = () => {
    if(playlistSong !== undefined && playlistSong.length > 0) {
      let currentIndex

      if(currnetIndexPlaylist === playlistSong.length - 1) {
        currentIndex = 0
      } else {
        Number(localStorage.getItem('isRandom')) == 1 && handleRandom(currnetIndexPlaylist) 
        currentIndex = currnetIndexPlaylist + 1

      }
      handleSetIndexChange(currentIndex);

    
    }
  }
  return (
    <button
      onClick={handleNextSong}
      className="mx-2 my-0 "
      title="Next Song"
    >
      <ArrowForwardIosIcon sx={{
        // color:'white',
        width:"24px",
        height:"24px"
      }}/>
    </button>
  )
}

export default NextControl