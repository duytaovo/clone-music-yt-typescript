import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'src/hooks/useRedux'
import img from '../imgzing.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { IconButton, Tooltip } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { RootState } from 'src/store/store'
import AnimatedBarChart from 'src/components/AnimationPlayChart'
import { toast } from 'react-toastify'

const TrackInfo: React.FC = () => {
  // const info = useAppSelector((state) => state.audio.infoSongPlayer)
  const songDetail = useAppSelector((state) => state.audio.songDetail)
  const { isPlay, isLoading } = useAppSelector((state: RootState) => state.audio)

  let [like, setLike] = useState(Number(localStorage.getItem('like')))
  const handleClickLike = () => {
    if (like === 0) {
      setLike(1)
      toast.success("Đã thêm vào danh sách bài hát 😝")
      localStorage.setItem('like', '1')
    } else {
      setLike(0)
      toast.success("Đã bỏ thêm vào danh sách bài hát 😂")
      localStorage.setItem('like', '0')
    }
  }
  return (
    <div className='flex items-center'>
      {/* Thumbnail */}
      {isPlay && isLoading == false && (
        <div className='z-10 absolute top-[30%] '>
          <AnimatedBarChart numberColumn={10} width={50} height={40} />
        </div>
      )}
      <div className='w-full'>
        <img src={songDetail?.thumbnail || img} alt={songDetail?.title} className='relative h-[46px] rounded-[5px]' />
      </div>
      {/* End Thumbnail */}

      {/* Info */}
      <div className='ml-3 mr-2 flex h-[46px] flex-col justify-center'>
        <div className='mb-1 cursor-default truncate text-base font-semibold text-[color:var(--color-text)] opacity-90'>
          {songDetail?.title || 'Chọn bài hát'}
        </div>
        <div className='flex text-xs text-[color:var(--color-text)] opacity-60'>
          {songDetail?.artists &&
            songDetail.artists.map((e: any, i: number) => {
              return (
                <span key={i}>
                  {i > 0 ? <span>, </span> : ''}
                  <Link className='hover:underline' to={``}>
                    {e.name}
                  </Link>
                </span>
              )
            })}
        </div>
      </div>
      {/* End Info */}
      <Tooltip title='Like'>
        <IconButton
          style={{
            borderRadius: '4px'
          }}
          aria-label='like'
          className='buttonMark__wrapper'
          onClick={handleClickLike}
        >
          {like === 0 ? (
            <FavoriteBorderIcon
              fontSize='small'
              className='buttonMark__isChecking'
              style={{ fontSize: '24px', color: 'white' }}
            />
          ) : (
            <FavoriteIcon
              fontSize='small'
              className='buttonMark__isChecking'
              style={{ fontSize: '24px', color: '#FF52A2' }}
            />
          )}
        </IconButton>
      </Tooltip>
    </div>
  )
}

export default TrackInfo
