import React, { useRef } from 'react'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { setOpenLyric } from 'src/store/slices/audio'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import useLyric from 'src/hooks/useLyric'
// import VideoPlayer from '../VideoPlayer'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { Grid, IconButton } from '@mui/material'
import VideoPlayerSong from '../VideoPlayer/VideoPlayer'

const Lyric: React.FC<{ auRef: HTMLAudioElement | null }> = ({ auRef }) => {
  const isLyric = useAppSelector((state) => state.audio.isLyric)
  const songId = useAppSelector((state) => state.audio.songId)
  const currentTime = useAppSelector((state) => state.audio.currentTime)
  const lyric = useLyric(songId)
  const { playlist } = useSelector((state: RootState) => state.playlist)
  const songDetail = useAppSelector((state) => state.audio.songDetail)

  const dispatch = useAppDispatch()
  const lyrRef = useRef<HTMLDivElement>(null)

  const handleCloseLyric = () => {
    if (isLyric) {
      if (lyrRef.current) {
        lyrRef.current.classList.remove('animate-[lyric-up_1s]')
        lyrRef.current.classList.add('animate-[lyric-down_1s]')
      }
      setTimeout(() => {
        dispatch(setOpenLyric(false))
      }, 1000)
    } else {
      dispatch(setOpenLyric(true))
    }
  }

  return (
    <>
      <div
        className={
          'fixed inset-0 z-[200] bg-bg_chart transition-all duration-300 ease-in-out ' +
          (isLyric ? 'animate-[lyric-up_1s]' : 'hidden')
        }
        ref={lyrRef}
      >
        {/* Close Button */}
        <div className='mb-10 grid h-full grid-flow-col grid-cols-3 py-16'>
          <VideoPlayerSong playListData={playlist} songThumbnail={songDetail} />
          <div className='mx-auto  flex h-full max-w-2xl flex-col overflow-y-auto overflow-x-hidden text-[28px] font-semibold text-[white]'>
            <div className='mt-[10vh]'></div>
            {/* Line Lyric */}
            {lyric &&
              lyric.map((e: { data: string; startTime: number; endTime: number }, index: number) => {
                if (e.startTime <= currentTime * 1000 && currentTime * 1000 <= e.endTime) {
                  document.getElementById(`line-${index}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }
                return (
                  <div
                    id={`line-${index}`}
                    key={index}
                    className={
                      'my-[2px] mx-0 box-border rounded-xl px-[18px] py-3 transition-all duration-500 hover:text-[#c3cada] ' +
                      (e.startTime <= currentTime * 1000 && currentTime * 1000 <= e.endTime
                        ? 'origin-[center_left] scale-105 text-[yellow]'
                        : '')
                    }
                    onDoubleClick={() => {
                      if (auRef) {
                        auRef.currentTime = e.startTime / 1000
                      }
                    }}
                  >
                    <span
                      className={
                        'inline-block cursor-pointer ' +
                        (e.startTime <= currentTime * 1000 && currentTime * 1000 <= e.endTime
                          ? 'opacity-100'
                          : 'opacity-30')
                      }
                    >
                      {e.data}
                    </span>
                  </div>
                )
              })}
            {/* End Line Lyric*/}
          </div>
          <div
            className='fixed top-6 right-6 mx-3 my-3 cursor-pointer rounded-[25%] bg-transparent p-2 transition-all duration-200 '
            onClick={handleCloseLyric}
          >
            <IconButton
              title='Close lyric'
              sx={{
                '&:hover': {
                  backgroundColor: 'Black',
                  opacity: [0.9, 0.8, 0.7],
                  color: 'white'
                }
              }}
            >
              <ArrowDropDownIcon
                sx={{
                  color: 'white',
                  width: '30px',
                  height: '30px'
                }}
              />
            </IconButton>
          </div>
        </div>
        {/* End Close Button */}
        {/* Lyric */}

        {/* End Lyric */}
      </div>
    </>
  )
}

export default Lyric
