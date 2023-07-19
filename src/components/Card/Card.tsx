import Card from '@mui/material/Card'
import {  IconButton, Typography } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { addUrlToHistory, removeFirstUrl, updateHistory} from 'src/store/slices/playlist'

interface Props {
  song: any
  img: any
}

export default function MediaControlCard({ song }: Props) {
  const navigate = useNavigate()
  const routes = useAppSelector((state) => state.playlist.routes)
  const dispatch = useAppDispatch()

  console.log(routes)
  
  return (
    <div>
      <Card
        sx={{ display: 'flex', cursor: 'pointer' }}
        onClick={async () => {
          if(`/player/${song.encodeId}` !== routes[0] && `/player/${song.encodeId}` !== routes[1]){
            dispatch(updateHistory(`/player/${song.encodeId}`))
          }
          navigate(`/player/${song.encodeId}`)
        }}
      >
        <div className='relative inline-block  group'>
          <img src={song.banner || song.thumbnail} className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 relative hover:opacity-50 hover:shadow-lg cursor-pointer ' alt='' />
          <div className="">
          <IconButton
            aria-label='play/pause'
            sx={{
              position: 'absolute',
              transform: 'translate(-50%, -50%)',
              margin: 'auto',
              top: '50%',
              left: '50%',
              color: 'white',
              '&:hover': {
                backgroundColor: 'Black',
                opacity: [0.9, 0.8, 0.7],
                color: 'white'
              }
            }}
          >
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          </div>
        </div>
        <IconButton
          sx={{
            display: 'none',
            position: 'absolute',
            top: '5px',
            margin: 'auto',
            color: 'white',
            '&:hover': {
              backgroundColor: 'Black',
              opacity: [0.9, 0.8, 0.7],
              color: 'white'
            }
          }}
        >
          <MoreVertIcon />
        </IconButton>
      </Card>
      <div className='flex items-center '>
        <Typography variant='subtitle1' color='white' component='div'>
          {song.title} | {song.artistsNames}
        </Typography>
      </div>
    </div>
  )
}
