import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import axios from 'axios'
import { API } from 'src/constants/config'
import img from './imgzing.jpg'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}))

const VideoPlayer = ({ playListData }: { playListData: any }) => {
  const today = new Date();
 const time = today.getDate()+':'+(today.getMonth()+1)+':'+today.getFullYear();
  const [expanded, setExpanded] = React.useState(false)
  const id = `${playListData?.data.data.data.song.items[0].encodeId}`
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API.SONG_INFO_DETAILT_API}?id=${id}`) // Thay đổi URL API của bạn tại đây
        setData(response.data)
      } catch (error) {}
    }

    fetchData()
  }, [])
  return (
    <div>
      <Card sx={{ maxWidth: 400, ml: 3, backgroundColor: '#4f1f6f' }}>
        {/* <ReactPlayer
          className='react-player'
          playing={false}
          controls={true}
          url='https://www.youtube.com/watch?v=zbE5WplyJ9s&t=2s&ab_channel=B%E1%BA%A3oB%C3%ACnhMedia'
          width='inherit'
          config={{
            youtube: {
              playerVars: { showinfo: 1 }
            },
            facebook: {
              appId: '12345'
            }
          }}
        /> */}

        <CardMedia
          component='img'
          sx={{
            display:"block",
            width: '60vw',
            height: '40vh',
            cursor: 'pointer',
            position: 'relative',
            '&:hover': {
              display: 'block',
              backgroundColor: 'DEDEDE',
              opacity: [0.9, 0.8, 0.7],
              transform: 'scale(1.1)'
            }
          }}
          image={img}
          alt='Paella dish'
        />
        {/* <IconButton
          aria-label='play/pause'
          sx={{
            position: 'absolute',
            // transform: `${`translate(-50%,-50%)`} `,
            top: '50%',
            left:0,
            margin: 'auto',
            color: 'white',
            '&:hover': {
              backgroundColor: 'Black',
              opacity: [0.9, 0.8, 0.7],
              color: 'white'
            }
          }}
        > */}
        {/* <PlayArrowIcon
          sx={{ height: 38, width: 38, position: 'absolute', top: '50%', left: 0, transform: `${`translate(50%,50%)`}` }}
        /> */}
        {/* </IconButton> */}
        <CardContent>
          <Typography
            variant='h5'
            color='white'
            sx={
              {
                // color:"#c3cada"
              }
            }
          >
            {playListData?.data.data.data.title}
          </Typography>
          <Typography
            variant='body2'
            color='white'
            sx={{
              color: '#c3cada'
            }}
          >
            Cập nhật ngày {time}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label='add to favorites'
            sx={{
              color: 'white',
              '&:hover': {
                opacity: [0.9, 0.8, 0.7],
                color: 'white'
              }
            }}
          >
            <FavoriteBorderIcon sx={{ color: 'white' }} />
          </IconButton>
          <IconButton
            aria-label='share'
            sx={{
              color: 'white',
              '&:hover': {
                opacity: [0.9, 0.8, 0.7],
                color: 'white'
              }
            }}
          >
            <ShareIcon sx={{ color: '#c3cada' }} />
          </IconButton>
          <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            <ExpandMoreIcon
              sx={{
                color: '#c3cada',
                '&:hover': {
                  opacity: [0.9, 0.8, 0.7],
                  color: 'white'
                }
              }}
            />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit></Collapse>
      </Card>
    </div>
  )
}

export default VideoPlayer
