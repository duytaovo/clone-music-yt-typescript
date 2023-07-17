import React from "react"
import PauseIcon from '@mui/icons-material/Pause';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
const PlayControl:React.FC<{auRef: HTMLAudioElement | null | undefined}> = ({ auRef }) => {

  // const isPlay = useAppSelector((state) => state.audio.isPlay)
  // const dispatch = useAppDispatch()

  // const handlePlaySong = () => {
  //   if(isPlay === true) {
  //     dispatch(changeIconPlay( false ))
  //     if(auRef) {
  //       auRef.pause()
  //     }
  //   } else {
  //     dispatch(changeIconPlay( true ))
  //     if(auRef) {
  //       auRef.play()
  //     }
  //   }
  // }

  return (
    <button
      className={"w-[42px] h-[42px] mx-2 my-0 style__buttons"}
      title="Play Song"
      // onClick={ handlePlaySong }
    >
      {
        true
        ? <PauseIcon/>
        : <PlayCircleOutlineIcon/>
      }
    </button>
  )
}

export default PlayControl