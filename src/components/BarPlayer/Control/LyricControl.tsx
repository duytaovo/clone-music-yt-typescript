import React from "react"
import { useAppDispatch, useAppSelector } from "src/hooks/useRedux"
import { setOpenLyric } from "src/store/slices/audio"
import LyricsIcon from '@mui/icons-material/Lyrics';
import { useNavigate } from "react-router-dom";
const LyricControl:React.FC = () => {

  const isLyrics = useAppSelector((state) => state.audio.isLyric)
  const dispatch = useAppDispatch()
  const songDetail = useAppSelector((state) => state.audio.songDetail)
  const navigate = useNavigate()
  const handleOpenLyrics = () => {
    isLyrics
    ? dispatch(setOpenLyric(false)):
    dispatch(setOpenLyric(true))
    // navigate(`/player/${songDetail.encodeId}`)
  }

  return(
    <div
      onClick={ handleOpenLyrics }
    >
      <button className="mx-2 my-0 mt-1" title="Lyric & Karaoke">
        <LyricsIcon sx={{
          color:"white",
          width:"24px",
          height:"24px"
        }}/>
      </button>
    </div>
  )
}

export default LyricControl