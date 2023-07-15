import { Grid } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import getDuration from 'src/utils/getDuration'
interface Props {
  onClick: (value: string) => void;
}
export const ItemSongPlayer = ({ bg, songDetail,onClick }: { bg: string; songDetail: any,onClick:Props }) => {
  const navigate = useNavigate()
  const a = () =>{
    // onClick && onClick(songDetail.encodeId)
  }
  return (
    <div className={`${bg}`}>
      <Link to={`/player/${songDetail.encodeId}`}>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={4}>
            <div className='group flex w-max cursor-pointer flex-wrap justify-between text-[#c3cada] hover:text-blue-500'>
              <img
                src={songDetail?.thumbnail}
                alt=''
                className='h-12 w-12 rounded object-contain group-hover:opacity-50'
              />
              <div className='pd-3 ml-3'>
                <p>{songDetail.title}</p>
                <p>{songDetail.artistsNames}</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <p className='cursor-pointer text-[#c3cada] hover:text-blue-500'>{songDetail?.album?.title}</p>
          </Grid>
          <Grid item xs={4}>
            <p className='text-[#c3cada] hover:text-blue-500'>{getDuration(songDetail.duration)}</p>
          </Grid>
        </Grid>
      </Link>
    </div>
  )
}
