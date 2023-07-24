import React, { useContext, useEffect } from 'react'
import LyricControl from './LyricControl'
import NextControl from './NextControl'
import PlayControl from './PlayControl'
import PreviousControl from './PreviousControl'
import RepeatControl from './RepeatControl'
import ShuffleControl from './RandomControl'
import TrackInfo from './TrackInfo'
import VolumeControl from './VolumeControl'
import VolumeSliderControl from './VolumeSliderControl'
import SongSliderControl from './SongSliderControl'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { IconButton } from '@mui/material'
import { AppContext } from 'src/contexts/app.context'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'src/hooks/useRedux'

const Control: React.FC<{ auRef: HTMLAudioElement | null }> = ({ auRef }) => {
  const { isPlaying, setPlaying } = useContext(AppContext)
  const navigate = useNavigate()
  const {currentRoute,preRoute} = useAppSelector((state) => state.route.path)
  
  // Handle click on the music player bar
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    if (isPlaying && preRoute) {
      navigate(`${currentRoute?.pathname}`)
      setPlaying(false)
    } else {
      navigate(`${preRoute?.pathname}`)
      setPlaying(true)
    }
  }
  return (
    <>
      <SongSliderControl auRef={auRef} />

      <div className='z-[-1] mx-[10vw] grid h-full grid-cols-3'>
        {/* Track Info */}
        <TrackInfo />
        {/* End Track Info */}

        {/* Mid Controls Button */}
        <div className='flex items-center justify-center'>
          <PreviousControl />
          <PlayControl auRef={auRef} />
          <NextControl />
        </div>
        {/* End Mid Controls Button */}

        {/* Right Controls Button */}
        <div className='flex items-center justify-center'>
          <LyricControl />
          <RepeatControl />
          <ShuffleControl />
          <VolumeControl auRef={auRef} />
          <VolumeSliderControl auRef={auRef} />
          <div onClick={handleClick}>
            <IconButton
              sx={{
                ml: 3,
                '&:hover': {
                  backgroundColor: 'Black',
                  opacity: [0.9, 0.8, 0.7],
                  color: 'white'
                }
              }}
            >
              <KeyboardArrowUpIcon sx={{ color: 'white' }} />
            </IconButton>
          </div>
        </div>
        {/* End Right Controls Button */}
      </div>
    </>
  )
}

export default Control
