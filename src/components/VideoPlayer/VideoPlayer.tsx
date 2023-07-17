import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import img from './imgzing.jpg'

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

const VideoPlayer = ({ playListData,songThumbnail }: { playListData: any,songThumbnail:any }) => {
  const today = new Date();
 const time = today.getDate()+':'+(today.getMonth()+1)+':'+today.getFullYear();
  return (
    <div>
      {playListData !== undefined && 
      <Card sx={{ maxWidth: 400, ml: 3, backgroundColor: '#4f1f6f' }}>
        <CardMedia
          component='img'
          sx={{
            display:"block",
            // width: '60vw',
            // height: '40vh',
            cursor: 'pointer',
            position: 'relative',
            '&:hover': {
              display: 'block',
              backgroundColor: 'DEDEDE',
              opacity: [0.9, 0.8, 0.7],
              transform: 'scale(1.1)'
            }
          }}
          image={songThumbnail?.thumbnailM || img}
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
            {playListData?.data?.data?.data?.title}
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
        <CardActions disableSpacing sx={{display:"flex",justifyContent:"space-between"}}>
          <div>
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
          </div>
          <IconButton
            aria-label='share'
            sx={{
              color: 'white',
              '&:hover': {
                opacity: [0.9, 0.8, 0.7],
                color: 'white'
              },
              right:0,
            }}
          >
            <ExpandMoreIcon sx={{ color: '#c3cada' ,fontSize:"30px"}} />
          </IconButton>
        </CardActions>
      </Card>}
    </div>
  )
}

export default VideoPlayer
