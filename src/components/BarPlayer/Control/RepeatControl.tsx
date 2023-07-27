import React, { useState } from "react"
import RepeatIcon from '@mui/icons-material/Repeat';
const RepeatControl: React.FC = () => {

  let [isLoop, setIsLoop] = useState(Number(localStorage.getItem('isLoop')))
  const handleClick = () => {
    if ((isLoop === 0)) {
      setIsLoop(1)
      localStorage.setItem('isLoop', '1')
    } else {
      setIsLoop(0)
      localStorage.setItem('isLoop', '0')
    }
  }
  return(
    <div
      onClick={handleClick}
    >
      {
        isLoop == 1
        ?
        <button className="mx-2 my-0 " title="Repeat">
          <RepeatIcon  sx={{
        color:'#8062D6',
        width:"24px",
        height:"24px"
      }}/>
        </button>
        :
        <button className="mx-2 my-0 " title="Repeat">
          <RepeatIcon  
          sx={{
            // color:'white',
            width:"24px",
            height:"24px"
          }}/>
        </button>
      }
    </div>
  )
}

export default RepeatControl