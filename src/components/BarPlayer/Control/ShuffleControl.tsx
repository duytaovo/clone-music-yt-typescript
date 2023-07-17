import React from "react"
import ShuffleIcon from '@mui/icons-material/Shuffle';
const ShuffleControl: React.FC = () => {
  return(
    <button className="mx-2 my-0 style__buttons" title="Shuffle">
      <ShuffleIcon  sx={{
        // color:'white',
        width:"16px",
        height:"16px"
      }}/>
    </button>
  )
}

export default ShuffleControl