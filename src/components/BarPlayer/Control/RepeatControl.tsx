import React from "react"
import RepeatIcon from '@mui/icons-material/Repeat';
import { useAppDispatch, useAppSelector } from "src/hooks/useRedux";
import { setLoop } from "src/store/slices/audio";
const RepeatControl: React.FC = () => {

  const isLoop = useAppSelector((state) => state.audio.isLoop)
  const dispath = useAppDispatch()

  const handleRepeat = () => {
    if(isLoop) {
      dispath(setLoop(false))
    } else {
      dispath(setLoop(true))
    }
  }

  return(
    <div
      onClick={handleRepeat}
    >
      {
        isLoop
        ?
        <button className="mx-2 my-0 style__buttons" title="Repeat">
          <RepeatIcon  sx={{
        color:'blue',
        width:"16px",
        height:"16px"
      }}/>
        </button>
        :
        <button className="mx-2 my-0 style__buttons" title="Repeat">
          <RepeatIcon  
          sx={{
            // color:'white',
            width:"16px",
            height:"16px"
          }}/>
        </button>
      }
    </div>
  )
}

export default RepeatControl