import { Grid } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { changeIconPlay, updateIndexCardActive } from 'src/store/slices/audio'
import { RootState } from 'src/store/store'
import getDuration from 'src/utils/getDuration'
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';

interface Props {
  bg: any
  songDetail: any
  onClick: (value: string) => void
  index: number
  active: number
}
export const ItemSongPlayer = ({ bg, songDetail, onClick, index, active }: Props) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { isPlay, audioRef } = useAppSelector((state: RootState) => state.audio)
  console.log(audioRef)
  console.log(isPlay)
  const getIdSong = async () => {
    onClick && onClick(songDetail.encodeId)
    // navigate(`/player/${songDetail.encodeId}`)
    dispatch(updateIndexCardActive(index))
    dispatch(changeIconPlay(true))
    audioRef.play()
  }

  return (
    <div className={`${bg} ${index === active ? 'bg-[""]' : ''}`} onClick={getIdSong}>
      <Link to=''>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={5.5}>
            <div className='group flex w-max cursor-pointer flex-wrap justify-between text-[#c3cada] hover:text-blue-500'>
            <MusicNoteOutlinedIcon sx={{color:"#ffffff",m:1}}/>
              <img
                src={songDetail?.thumbnail}
                alt=''
                className='h-12 w-12 rounded object-contain group-hover:opacity-50'
              />
              <div className='pd-3 ml-3'>
                <p className='text-white line-clamp-2'>{songDetail.title}</p>
                <p className='text-[#696471] line-clamp-2 text-sm'>{songDetail.artistsNames}</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={4.5}>
            <p className='ml-1 cursor-pointer text-sm text-[#696471] line-clamp-1 hover:text-blue-500'>
              {songDetail?.album?.title}
            </p>
          </Grid>
          <Grid item xs={2}>
            <p className='text-center text-[#696471] text-sm line-clamp-1 hover:text-blue-500'>
              {getDuration(songDetail.duration)}
            </p>
          </Grid>
        </Grid>
      </Link>
    </div>
  )
}
