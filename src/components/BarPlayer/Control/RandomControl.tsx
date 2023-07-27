import React, { useState } from 'react'
import ShuffleIcon from '@mui/icons-material/Shuffle'

const ShuffleControl: React.FC = () => {

  let [isRandom, setIsRandom] = useState(Number(localStorage.getItem('isRandom')))
  const handleClick = () => {
    if ((isRandom === 0)) {
      setIsRandom(1)
      localStorage.setItem('isRandom', '1')
    } else {
      setIsRandom(0)
      localStorage.setItem('isRandom', '0')
    }
  }
  return (
    <div onClick={handleClick}>
      {isRandom == 1 ? (
        <button className='mx-2 my-0 ' title='Shuffle'>
          <ShuffleIcon
            sx={{
              color:'#335EEA',
              width: '24px',
              height: '24px'
            }}
          />
        </button>
      ) : (
        <button className='mx-2 my-0 ' title='Shuffle'>
          <ShuffleIcon
            sx={{
              // color:'white',
              width: '24px',
              height: '24px'
            }}
          />
        </button>
      )}
    </div>
  )
}

export default ShuffleControl
