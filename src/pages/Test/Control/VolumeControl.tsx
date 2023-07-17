import React from "react"
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
const VolumeControl: React.FC<{auRef: HTMLAudioElement | null}> = ({auRef}) => {

  // const isMute = useAppSelector((state) => state.audio.isMute)
  // // const volume = useAppSelector((state) => state.audio.volume)
  // const dispatch = useAppDispatch()

  // const handleMuteVolume = () => {
  //   if(isMute) {
  //     dispatch(changeIconVolume(false))
  //     dispatch(setVolume(
  //       Number(localStorage.getItem("volume"))
  //     ))
  //     if(auRef) {
  //       auRef.volume = Number(localStorage.getItem("volume"))
  //     }
  //   } else {
  //     dispatch(changeIconVolume(true))
  //     dispatch(setVolume(0))
  //     if(auRef) {
  //       auRef.volume = 0
  //     }
  //   }
  // }

  return (
    <div
      // onClick={handleMuteVolume}
    >
      {
        false
        ?
          <button className="mx-2 my-0 style__buttons" title="Mute">
            <VolumeMuteIcon />
          </button>
        :
          <button className="mx-2 my-0 style__buttons" title="Mute">
            <VolumeUpIcon />
          </button>
      }
    </div>
  )
}

export default VolumeControl