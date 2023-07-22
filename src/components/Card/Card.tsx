import Card from '@mui/material/Card'
import { IconButton, Typography } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'src/hooks/useRedux'
import { updateIdPlayList } from 'src/store/slices/playlist'

interface Props {
  song: any
  img: any
}

export default function MediaControlCard({ song }: Props) {

  return (
    <div>
      <Link to={`/playlist/${song.encodeId}`}>
        <Card
          sx={{ display: 'flex', cursor: 'pointer' }}
          onClick={() => {
            // navigate()
          }}
        >
          <div className='group relative  inline-block'>
            <img
              src={song.banner || song.thumbnail}
              className='relative cursor-pointer transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:opacity-50 hover:shadow-lg '
              alt=''
            />
            <div className=''>
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
      </Link>
    </div>
  )
}
