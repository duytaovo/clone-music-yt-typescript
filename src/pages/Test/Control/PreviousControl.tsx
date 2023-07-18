import React from "react"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const PreviousControl: React.FC = () => {

  // const currnetIndexPlaylist = useAppSelector((state) => state.audio.currnetIndexPlaylist)
  // const playlistSong:any = useAppSelector((state) => state.audio.playlistSong)

  // const dispatch = useAppDispatch()

  // const handleNextSong = () => {
  //   if(playlistSong !== undefined && playlistSong.length > 0) {
  //     let currentIndex
  //     if(currnetIndexPlaylist === 0) {
  //       currentIndex = 0
  //     } else {
  //       currentIndex = currnetIndexPlaylist - 1
  //     }

  //     dispatch(setCurrnetIndexPlaylist(
  //       currentIndex
  //     ))

  //     dispatch(setSongId(
  //       playlistSong[currentIndex].encodeId
  //     ))

  //     dispatch(changeIconPlay(true))
  //   }
  // }

  return (
    <button
      // onClick={handleNextSong}
      className="mx-2 my-0 " title="Previous Song"
    >
      <ArrowBackIosIcon  />
    </button>
  )
}

export default PreviousControl