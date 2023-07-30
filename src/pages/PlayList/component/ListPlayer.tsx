import { Grid } from '@mui/material'
import ItemSongPlayer from 'src/components/ItemSongPlayer'
import QueueMusicIcon from '@mui/icons-material/QueueMusic'
import AlbumIcon from '@mui/icons-material/Album'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { setPlaylistSong } from 'src/store/slices/audio'
import Skeleton from 'src/components/Skeleton/Loading'
interface Props {
  onClick: (value: string) => void
  valueLoading: number
}
export const ListPlayer = ({ onClick, valueLoading }: Props) => {
  const playList = useAppSelector((state) => state.audio.playlistSong)
  const dispatch = useAppDispatch()
  
  const handleOnDragEnd = (result: any) => {
    if (!result.destination) {
      return
    }
    const items_: any = reorder(playList, result.source.index, result.destination.index)

    dispatch(setPlaylistSong(items_ || []))
  }

  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  return (
    <div className='scrollbar-thumb-rounded h-[70vh] overflow-y-auto'>
      <div className='flex items-center justify-between text-sm text-[#A78295]'>
        <Grid container spacing={2} sx={{ mb: 2, ml: '' }}>
          <Grid item xs={5.5} sx={{ display: 'flex', alignItems: 'center' }}>
            <QueueMusicIcon />
            <p className='  ml-2'>BÀI HÁT</p>
          </Grid>
          <Grid item xs={4.5} sx={{ display: 'flex', alignItems: 'center' }}>
            <AlbumIcon />
            <p className=' ml-2'>ALBUM</p>
          </Grid>
          <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <AccessTimeFilledIcon />
            <p className='ml-2'>THỜI GIAN</p>
          </Grid>
        </Grid>
      </div>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId={'dropId'}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <div>
                {valueLoading < 100 ? (
                  <div className='flex flex-wrap items-center justify-between'>
                    <div style={{ display: 'flex', gap: 20,}}>
                      <Skeleton styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
                      <Skeleton
                        styles={{ height: '48px', width: '200px' }}
                        children={undefined}
                        className={undefined}
                      />
                    </div>
                    <div style={{ display: 'flex', gap: 20,}}>
                      <Skeleton styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
                      <Skeleton
                        styles={{ height: '48px', width: '200px' }}
                        children={undefined}
                        className={undefined}
                      />
                    </div>
                    <div style={{ display: 'flex', gap: 20,}}>
                      <Skeleton styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
                      <Skeleton
                        styles={{ height: '48px', width: '200px' }}
                        children={undefined}
                        className={undefined}
                      />
                    </div>
                    <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
                      <Skeleton styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
                      <Skeleton
                        styles={{ height: '48px', width: '200px' }}
                        children={undefined}
                        className={undefined}
                      />
                    </div>
                    <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
                      <Skeleton styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
                      <Skeleton
                        styles={{ height: '48px', width: '200px' }}
                        children={undefined}
                        className={undefined}
                      />
                    </div>
                    <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
                      <Skeleton styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
                      <Skeleton
                        styles={{ height: '48px', width: '200px' }}
                        children={undefined}
                        className={undefined}
                      />
                    </div>
                    <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
                      <Skeleton styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
                      <Skeleton
                        styles={{ height: '48px', width: '200px' }}
                        children={undefined}
                        className={undefined}
                      />
                    </div>
                    <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
                      <Skeleton styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
                      <Skeleton
                        styles={{ height: '48px', width: '200px' }}
                        children={undefined}
                        className={undefined}
                      />
                    </div>
                    <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
                      <Skeleton styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
                      <Skeleton
                        styles={{ height: '48px', width: '200px' }}
                        children={undefined}
                        className={undefined}
                      />
                    </div>
                    <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
                      <Skeleton styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
                      <Skeleton
                        styles={{ height: '48px', width: '200px' }}
                        children={undefined}
                        className={undefined}
                      />
                    </div>
                    <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
                      <Skeleton styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
                      <Skeleton
                        styles={{ height: '48px', width: '200px' }}
                        children={undefined}
                        className={undefined}
                      />
                    </div>
                    <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
                      <Skeleton styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
                      <Skeleton
                        styles={{ height: '48px', width: '200px' }}
                        children={undefined}
                        className={undefined}
                      />
                    </div>
                    <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
                      <Skeleton styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
                      <Skeleton
                        styles={{ height: '48px', width: '200px' }}
                        children={undefined}
                        className={undefined}
                      />
                    </div>
                    <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
                      <Skeleton styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
                      <Skeleton
                        styles={{ height: '48px', width: '200px' }}
                        children={undefined}
                        className={undefined}
                      />
                    </div>
                    <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
                      <Skeleton styles={{ height: '48px', width: '48px' }} children={undefined} className={undefined} />
                      <Skeleton
                        styles={{ height: '48px', width: '200px' }}
                        children={undefined}
                        className={undefined}
                      />
                    </div>
                  </div>
                ) : (
                  playList?.map((_song: any, index: number) => (
                    <div key={_song.encodeId}>
                      <ItemSongPlayer
                        index={index}
                        bg='hover:bg-[#302639] rounded ml-1 pb-[1px]  text-sm shadow-sm opacity-50`'
                        onClick={onClick}
                        songDetail={_song}
                        id={_song.encodeId}
                      />
                    </div>
                  ))
                )}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
