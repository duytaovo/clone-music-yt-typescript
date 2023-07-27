import { Grid } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { changeIconPlay, setAutoPlay } from 'src/store/slices/audio'
import getDuration from 'src/utils/getDuration'
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined'
import { memo, useEffect } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import Loader from '../Loader'

interface Props {
  bg: any
  songDetail: any
  onClick: (value: string) => void
  index: number
  id: string
}

const ItemSongPlayer = ({ bg, songDetail, onClick, index, id }: Props) => {
  const dispatch = useAppDispatch()
  const songId = useAppSelector((state) => state.audio.songId)
  const isFocus = songId == songDetail?.encodeId
  const { isLoading } = useAppSelector((state) => state.audio)

  const getIdSong = async () => {
    onClick && onClick(songDetail.encodeId)
    dispatch(changeIconPlay(true))
    dispatch(setAutoPlay(true))
  }

  useEffect(() => {
    if (songId && isFocus) {
      const element = document.querySelector(`.song-playlist-item-player-${songId}`)
      element &&
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
    }
  }, [songId])

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            userSelect: 'none',
            ...provided.draggableProps.style
          }}
        >
          <div
            className={` ${bg} hover:bg-white ${
              isFocus ? 'bg-[#302639] shadow-box-shadow' : ''
            } song-playlist-item-player-${songDetail?.encodeId}`}
            onClick={getIdSong}
          >
            <Link to=''>
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={5.5}>
                  <div className='group flex w-max cursor-pointer flex-wrap justify-between text-sm text-[#c3cada] hover:text-blue-500'>
                    <MusicNoteOutlinedIcon
                      sx={{ color: '#A78295', mr: 1, transform: 'translate(-5px,10px)', fontSize: '25px' }}
                    />
                    <div className='relative'>
                      <img
                        src={songDetail?.thumbnail}
                        alt=''
                        className='relative h-12 w-12 rounded object-contain group-hover:opacity-50'
                      />
                      {isFocus && isLoading == true && (
                        <div
                          className='
      absolute z-10  translate-x-[-50%] translate-y-[-50%] top-[50%] left-[65%]
      '
                        >
                          <Loader />
                        </div>
                      )}
                    </div>
                    <div className='pd-3 ml-2'>
                      <p className='text-white line-clamp-2'>{songDetail.title}</p>
                      <p className='text-sm text-[#A78295] line-clamp-2'>{songDetail.artistsNames}</p>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={4.5}>
                  <p className='ml-1 cursor-pointer text-sm text-[#A78295] line-clamp-1 hover:text-blue-500'>
                    {songDetail?.album?.title}
                  </p>
                </Grid>
                <Grid item xs={2}>
                  <p className='text-center text-sm text-[#A78295] line-clamp-1 hover:text-blue-500'>
                    {getDuration(songDetail.duration)}
                  </p>
                </Grid>
              </Grid>
            </Link>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default memo(ItemSongPlayer)
