import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ShareIcon from '@mui/icons-material/Share'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import img from './imgzing.jpg'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import PauseIcon from '@mui/icons-material/Pause'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import AnimatedBarChart from '../AnimationPlayChart'
import { changeIconPlay } from 'src/store/slices/audio'
import { RootState } from 'src/store/store'
import Button from '../Button'

const VideoPlayer = ({ playListData, songThumbnail }: { playListData: any; songThumbnail: any }) => {
  const today = new Date()
  const time = today.getDate() + ':' + (today.getMonth() + 1) + ':' + today.getFullYear()
  const { isPlay, audioRef } = useAppSelector((state: RootState) => state.audio)
  let [like, setLike] = useState(Number(localStorage.getItem('like')))
  const dispatch = useAppDispatch()

  const handleClickLike = () => {
    if (like === 0) {
      setLike(1)
      localStorage.setItem('like', '1')
    } else {
      setLike(0)
      localStorage.setItem('like', '0')
    }
  }
  const handlePlaySong = () => {
    if (isPlay === true) {
      dispatch(changeIconPlay(false))
      if (audioRef) {
        audioRef.pause()
      }
    } else {
      dispatch(changeIconPlay(true))
      if (audioRef) {
        audioRef.play()
      }
    }
  }
  return (
    <div>
      {playListData !== undefined && (
        <Card variant='outlined' sx={{ maxWidth: 320, ml: 3, mt: 2, backgroundColor: 'transparent' }}>
          <div className='group/item relative inline-block shadow-box-shadow transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:opacity-50 hover:shadow-box-shadow'>
            <img src={songThumbnail?.thumbnailM || img} className='relative w-80 cursor-pointer  rounded-lg' alt='' />
            <div className='group/edit invisible group-hover/item:visible' onClick={handlePlaySong}>
              {isPlay ? (
                <IconButton
                  aria-label='play/pause'
                  sx={{
                    position: 'absolute',
                    margin: 'auto',
                    transform: 'translate(-50%, -50%)',
                    top: '50%',
                    left: '50%',
                    '&:hover': {
                      opacity: [0.9, 0.8, 0.7],
                      color: '#ffffff'
                    }
                  }}
                >
                  <PauseIcon sx={{ height: 38, width: 38 }}></PauseIcon>
                </IconButton>
              ) : (
                <IconButton
                  aria-label='play/pause'
                  sx={{
                    position: 'absolute',
                    margin: 'auto',
                    color: '#ffffff',
                    transform: 'translate(-50%, -50%)',
                    top: '50%',
                    left: '50%',
                    '&:hover': {
                      opacity: [0.9, 0.8, 0.7],
                      color: '#ffffff'
                    }
                  }}
                >
                  <PlayCircleFilledIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
              )}
            </div>
            {isPlay && (
              <div className='absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-100%] '>
                <AnimatedBarChart />
              </div>
            )}
          </div>
          <CardContent
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}
          >
            <Typography
              variant='h6'
              color='#ffffff'
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
              color='#ffffff'
              sx={{
                color: '#A78295'
              }}
            >
              Cập nhật ngày {time}
            </Typography>
            <div onClick={handlePlaySong}>
              {isPlay ? (
                <Button className='mb-2 flex w-[full] items-center justify-center rounded-[30px] bg-[#9B4DE0] py-3 px-3 mt-3 text-sm uppercase text-white hover:opacity-80'>
                Tạm dừng
              </Button>
              ) : (
                <Button className='mb-2 flex w-[full%] items-center justify-center rounded-[30px] bg-[#9B4DE0] py-3 px-3 mt-3  text-sm uppercase text-white hover:opacity-80'>
                  Tiếp tục phát
                </Button>
              )}
            </div>
          </CardContent>
          <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <IconButton
                aria-label='add to favorites'
                sx={{
                  color: '#ffffff',

                  '&:hover': {
                    opacity: [0.9, 0.8, 0.7],
                    color: '#ffffff'
                  }
                }}
                onClick={handleClickLike}
              >
                {like === 0 ? (
                  <FavoriteBorderIcon
                    fontSize='small'
                    className='buttonMark__isChecking'
                    style={{ fontSize: '24px', color: '#ffffff' }}
                  />
                ) : (
                  <FavoriteIcon
                    fontSize='small'
                    className='buttonMark__isChecking'
                    style={{ fontSize: '24px', color: '#ffffff' }}
                  />
                )}
              </IconButton>
              <IconButton
                aria-label='share'
                sx={{
                  color: '#ffffff',
                  '&:hover': {
                    opacity: [0.9, 0.8, 0.7],
                    color: '#ffffff'
                  }
                }}
              >
                <ShareIcon sx={{ color: '#c3cada' }} />
              </IconButton>
            </div>
          </CardActions>
        </Card>
      )}
    </div>
  )
}

export default VideoPlayer
