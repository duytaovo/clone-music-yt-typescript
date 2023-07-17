import React, { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import Control from './Control'

import {
  changeIconPlay,
  setCurrentTime,
  setCurrnetIndexPlaylist,
  setDuration,
  setInfoSongPlayer,
  setSongId,
  setSrcAudio
} from 'src/store/slices/audio'

//
interface songType {
  [key: number]: string
  title: string
  infoSong: string
  thumbnail: string
  artistsNames: string
  artists: []
}

interface Props {
  audioUrl: string
  idSongDetail: string
  playlist: any
  songDetail: any
}

const BarPlayer = ({ audioUrl, idSongDetail, playlist, songDetail }: Props) => {
  const srcAudio = useAppSelector((state) => state.audio.srcAudio)
  const isLoop = useAppSelector((state) => state.audio.isLoop)
  const dispath = useAppDispatch()
  const currnetIndexPlaylist = useAppSelector((state) => state.audio.currnetIndexPlaylist)
  const playlistSong: any = useAppSelector((state) => state.audio.playlistSong)

  const dispatch = useAppDispatch()

  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    ;(async () => {
      try {
        if (idSongDetail === '') {
          console.log('Song id not found')
        } else {
          audioUrl !== undefined ? dispath(setSrcAudio(audioUrl)) : dispath(setSrcAudio(''))
          dispatch(changeIconPlay(true))
          dispath(
            setInfoSongPlayer({
              title: songDetail.title,
              thumbnail: songDetail.thumbnail,
              artistsNames: songDetail.artistsNames,
              artists: songDetail.artists
            })
          )
        }
      } catch (err) {
        console.log(err)
      }
    })()
  }, [songDetail, dispath, idSongDetail])
  // console.log(songDetail)
  // console.log(idSongDetail)
  return (
    <>
      {
        <div className='fixed inset-x-0 bottom-0 z-[100] flex h-16 flex-col justify-around bg-white backdrop-blur-[30px] backdrop-saturate-[180%]'>
          <Control auRef={audioRef.current} />
        </div>
      }

      <audio
        ref={audioRef}
        src={srcAudio}
        className='hidden'
        loop={isLoop}
        autoPlay={true}
        hidden
        onTimeUpdate={() => {
          if (audioRef.current) {
            dispath(setCurrentTime(audioRef.current.currentTime))
          }
        }}
        onLoadedData={() => {
          if (audioRef.current) {
            dispath(setDuration(audioRef.current.duration))
          }
        }}
        onEnded={() => {
          if (!isLoop) {
            dispath(setCurrentTime(0))
            dispath(changeIconPlay(false))

            if (playlistSong !== undefined && playlistSong.length > 0) {
              let currentIndex

              if (currnetIndexPlaylist === playlistSong.length - 1) {
                currentIndex = 0
              } else {
                currentIndex = currnetIndexPlaylist + 1
              }

              dispatch(setCurrnetIndexPlaylist(currentIndex))

              dispatch(setSongId(playlistSong[currentIndex].encodeId))

              dispatch(changeIconPlay(true))
            }
          }
        }}
      />

      {/* <Lyric auRef={audioRef.current}/> */}
    </>
  )
}

export default BarPlayer
