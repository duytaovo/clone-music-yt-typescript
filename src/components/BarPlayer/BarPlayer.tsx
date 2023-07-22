import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import Control from './Control'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  changeIconPlay,
  setAudioRef,
  setCurrentTime,
  setCurrnetIndexPlaylist,
  setDuration,
  setInfoSongPlayer,
  setSongDetail,
  setSongId,
  setSrcAudio
} from 'src/store/slices/audio'
import { getSongDetail, getSongSound } from 'src/store/slices/playlist'
import { unwrapResult } from '@reduxjs/toolkit'
import Lyric from './Lyric'
import { AppContext } from 'src/contexts/app.context'

interface Props {
  songDetail: any
}

const BarPlayer = ({ songDetail }: Props) => {
  const srcAudio = useAppSelector((state) => state.audio.srcAudio)
  const isLoop = useAppSelector((state) => state.audio.isLoop)
  const songId = useAppSelector((state) => state.audio.songId)
  const { isPlaying, setPlaying } = useContext(AppContext)

  // const songDetail = useAppSelector((state) => state.audio.songDetail)
  const currnetIndexPlaylist = useAppSelector((state) => state.audio.currnetIndexPlaylist)
  const playlistSong: any = useAppSelector((state) => state.audio.playlistSong)

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setAudioRef(audioRef.current));
  }, [dispatch]);

  useEffect(() => {
    ;(async () => {
      try {
        if (songId === '') {
          console.log('Song id not found')
        } else {
          await dispatch(getSongSound(songId))
            .then(unwrapResult)
            .then((res) => dispatch(setSrcAudio(res?.data?.data?.data['128'])))
          await dispatch(getSongDetail(songId))
            .then(unwrapResult)
            .then((res) => dispatch(setSongDetail(res?.data?.data?.data)))
          // await dispatch(changeIconPlay(true))
          dispatch(
            setInfoSongPlayer({
              title: songDetail?.title,
              thumbnail: songDetail?.thumbnail,
              artistsNames: songDetail?.artistsNames,
              artists: songDetail?.artists
            })
          )
        }
      } catch (err) {
        console.log(err)
      }
    })()
  }, [dispatch, songId])
  ///////


  return (
    <>
      <div className={`inset-x-0 bottom-0 z-[100] flex h-16 flex-col justify-around bg-[#130C1C] font-normal text-white backdrop-blur-[30px] backdrop-saturate-[180%]
      transition-all duration-300 fixed`}
      >
        <Control auRef={audioRef.current} />
      </div>

      <audio
        ref={audioRef}
        src={srcAudio}
        className='hidden'
        loop={isLoop}
        autoPlay={true}
        hidden
        onTimeUpdate={() => {
          if (audioRef.current) {
            dispatch(setCurrentTime(audioRef.current.currentTime))
          }
        }}
        onLoadedData={() => {
          if (audioRef.current) {
            dispatch(setDuration(audioRef.current.duration))
          }
        }}
        onEnded={() => {
          if (!isLoop) {
            dispatch(setCurrentTime(0))
            dispatch(changeIconPlay(false))

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

      <Lyric auRef={audioRef.current} />
    </>
  )
}

export default BarPlayer
