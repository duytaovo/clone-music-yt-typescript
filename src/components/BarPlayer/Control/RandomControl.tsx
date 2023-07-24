import React, { useState } from 'react'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import { RootState } from 'src/store/store'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { setRandom } from 'src/store/slices/audio'

const ShuffleControl: React.FC = () => {
  let {  isRandom } = useAppSelector((state: RootState) => state.audio)
  const dispatch = useAppDispatch()

  const onClick = () => {
      dispatch(setRandom(!isRandom))
  }
  return (
    <div onClick={onClick}>
      {isRandom ? (
        <button className='mx-2 my-0 ' title='Shuffle'>
          <ShuffleIcon
            sx={{
              color:'blue',
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
