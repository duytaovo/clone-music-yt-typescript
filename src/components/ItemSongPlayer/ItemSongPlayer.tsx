import { Grid } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import getDuration from 'src/utils/getDuration'
interface Props {
  bg:any,
  songDetail:any,
  onClick: (value: string) => void;
}
export const ItemSongPlayer = ({ bg, songDetail,onClick }: Props ) => {
  const getIdSong = () =>{
    onClick && onClick(songDetail.encodeId)
  }
  return (
    <div className={`${bg}`} onClick={getIdSong}>
      <Link to={``}>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={5.5}>
            <div className='group flex w-max cursor-pointer flex-wrap justify-between text-[#c3cada] hover:text-blue-500'>
              <img
                src={songDetail?.thumbnail}
                alt=''
                className='h-12 w-12 rounded object-contain group-hover:opacity-50'
              />
              <div className='pd-3 ml-3'>
                <p className="text-white line-clamp-2">{songDetail.title}</p>
                <p className="text-[#8C8891] line-clamp-2">{songDetail.artistsNames}</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={4.5}>
            <p className='cursor-pointer ml-1 text-[#c3cada] line-clamp-1 hover:text-blue-500'>{songDetail?.album?.title}</p>
          </Grid>
          <Grid item xs={2}>
            <p className='text-[#c3cada] text-center hover:text-blue-500 line-clamp-1'>{getDuration(songDetail.duration)}</p>
          </Grid>
        </Grid>
      </Link>
    </div>
  )
}
