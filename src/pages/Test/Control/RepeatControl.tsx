import React from "react"
import RepeatIcon from '@mui/icons-material/Repeat';
const RepeatControl: React.FC = () => {

  // const isLoop = useAppSelector((state) => state.audio.isLoop)
  // const dispath = useAppDispatch()

  // const handleRepeat = () => {
  //   if(isLoop) {
  //     dispath(setLoop(false))
  //   } else {
  //     dispath(setLoop(true))
  //   }
  // }

  return(
    <div
      // onClick={handleRepeat}
    >
      {
        false
        ?
        <button className="mx-2 my-0 " title="Repeat">
          <RepeatIcon  />
        </button>
        :
        <button className="mx-2 my-0 " title="Repeat">
          <RepeatIcon  />
        </button>
      }
    </div>
  )
}

export default RepeatControl