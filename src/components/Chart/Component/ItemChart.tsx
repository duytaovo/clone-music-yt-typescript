import {  CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import Button from 'src/components/Button'
import ItemSongHome from 'src/components/ItemSongHome/ItemSongHome'

export const ItemChart = ({ dataChart }: any) => {
  return (
    <div className='flex flex-col items-center'>
      <div>
        {dataChart?.items?.slice(0, 3)?.map((chart: any, index: number) => (
          <div
            className='group ml-3.5 flex w-max cursor-pointer flex-wrap justify-between text-[#CBFFA9] hover:text-blue-500'
            key={index}
          >
            <h4 className='p-6  pl-3 font-sans text-[28px] font-semibold text-[#EF6262] line-clamp-1 group-hover:text-blue-500 group-hover:opacity-50'>
              {index + 1}
            </h4>

            <img src={chart.thumbnail} alt='' className='h-12 w-12 rounded object-contain group-hover:opacity-50' />
            <CardContent>
              <Typography variant='body2' color='' sx={{}}>
                {chart.title}
              </Typography>
              <Typography
                variant='body2'
                color=''
                sx={{
                  color: '#A78295'
                }}
              >
                {chart.artistsNames}
              </Typography>
            </CardContent>
          </div>
        ))}
      </div>
      <Button className='flex w-[40%] mb-2 items-center justify-center rounded-[30px] bg-[#75C2F6] py-3  text-sm uppercase text-white hover:opacity-80'>
        Xem thêm
      </Button>
    </div>
  )
}
