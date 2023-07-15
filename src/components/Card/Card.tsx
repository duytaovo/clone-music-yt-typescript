import { makeStyles, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { StyleHTMLAttributes } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";

interface Props {
  song: any
  img: any
}


export default function MediaControlCard({ song, img }: Props) {
  const navigate = useNavigate()
  
  return (
    <div
    >
      <Card sx={{ display: 'flex', cursor: 'pointer' }} onClick={() =>{
        navigate(`/player/${song.encodeId}`)
      }}>
        <CardMedia
          component='img'
          sx={{
            height: '200px',
            objectFit: 'revert',
            borderColor: '#DEDEDE',
            display: 'inline-block',
            pd: 0,
            cursor: 'pointer',
            position: 'relative',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
            // zIndex:100,
            '&:hover': {
              display: 'block',
              backgroundColor: 'DEDEDE',
              opacity: [0.9, 0.8, 0.7]
            }
          }}
          image={song.banner || song.thumbnail}
          alt='Live from space album cover'
        ></CardMedia>
        <div className=''>

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
        </div>
        <IconButton
          aria-label='play/pause'
          sx={{
            position: 'absolute',
            transform: `${`translate(210%,0)`} `,
            top: '35%',
            margin: 'auto',
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
      </Card>
      <div className='flex items-center '>
        <Typography variant='subtitle1' color='white' component='div'>
          {song.title} | {song.artistsNames}
        </Typography>
      </div>
    </div>
  )
}
