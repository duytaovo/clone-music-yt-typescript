import { CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import ItemSongPlayer from 'src/components/ItemSongPlayer'
interface Props {
  onClick: (value: string) => void;
  playListData:any
}
export const ListPlayer = ({playListData,onClick}:Props) => {



  return (
    <div className="h-[65vh] overflow-y-auto scrollbar-thumb-rounded">
      <div className='flex items-center justify-between text-white'>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <p className="mb-3">BÀI HÁT</p>
          </Grid>
          <Grid item xs={4}>
            <p className="mb-3">ALBUM</p>
          </Grid>
          <Grid item xs={4}>
            <p className="mb-3">THỜI GIAN</p>
          </Grid>
        </Grid>
      </div>
      <div>
      {playListData?.data.data.data.song.items?.map((_song: any , index: number) => (
          <div
            key={_song.encodeId}
          >
            <ItemSongPlayer bg="hover:bg-[#302639] rounded pl-2 pb-[1px]" onClick={onClick} songDetail={_song}/>
          </div>
        ))}
      </div>
    </div>
  )
}
