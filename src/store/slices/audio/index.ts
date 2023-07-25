import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface AudioState {
  isPlay: boolean
  isMute: boolean
  songId: string
  currnetIndexPlaylist: number
  infoSongPlayer: {
    title: string
    thumbnail: string,
    artistsNames: string,
    artists: Array<object>
  }
  srcAudio: string
  currentTime: number
  duration: number
  volume: number
  isLoop: boolean
  autoPlay: boolean
  playlistSong: Array<object>
  isLyric: boolean,
  songDetail:any,
  indexCardActive: number,
  audioRef: any,
  isRandom: boolean

}

const initialState: AudioState = {
  isPlay: false,
  isMute: false,
  songId: localStorage.getItem("songId") || "",
  currnetIndexPlaylist: 0,
  infoSongPlayer: {
    title: "",
    thumbnail: "",
    artistsNames: "",
    artists: [],
  },
  srcAudio: "",
  currentTime: 0,
  duration: 0,
  volume: Number(localStorage.getItem("volume")) || 0.5,
  isLoop: Boolean(localStorage.getItem("isLoop")),
  autoPlay: false,
  playlistSong: [],
  isLyric: false,
  songDetail:{},
  indexCardActive:0,
  audioRef: null,
  isRandom: Boolean(localStorage.getItem("isRandom")),
}



const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    changeIconPlay: (state, action: PayloadAction<boolean>) => {
      state.isPlay = action.payload
    },
    changeIconVolume: (state, action: PayloadAction<boolean>) => {
      state.isMute = action.payload
    },
    setSongId: (state, action: PayloadAction<string>) => {
      state.songId = action.payload
      localStorage.setItem("songId", action.payload)
    },
    setInfoSongPlayer: (state, action: PayloadAction<object>) => {
      state.infoSongPlayer = {
        ...state.infoSongPlayer,
        ...action.payload
      }
    },
    setSrcAudio: (state, action: PayloadAction<string>) => {
      state.srcAudio = action.payload
    },
    setSongDetail: (state, action: PayloadAction<object>) => {
      state.songDetail = action.payload
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload
    },
    setLoop: (state, action: PayloadAction<boolean>) => {
      state.isLoop = action.payload
      localStorage.setItem("isLoop", String(action.payload))

    },
    setRandom: (state, action: PayloadAction<boolean>) => {
      state.isRandom = action.payload
      localStorage.setItem("isRandom", String(action.payload))
    },
    setAutoPlay: (state, action: PayloadAction<boolean>) => {
      state.autoPlay = action.payload
    },
    setPlaylistSong: (state, action: PayloadAction<Array<object>>) => {
      state.playlistSong = action.payload
    },
    setCurrnetIndexPlaylist: (state, action: PayloadAction<number>) => {
      state.currnetIndexPlaylist = action.payload
    },
    setOpenLyric: (state, action: PayloadAction<boolean>) => {
      state.isLyric = action.payload
    },
    updateIndexCardActive: (state, action) => {
      state.indexCardActive = action.payload;
    },
    setAudioRef:(state,action) =>{
      state.audioRef=action.payload
    }
  }
})

export const {
  changeIconPlay,
  changeIconVolume,
  setSongId,
  setInfoSongPlayer,
  setCurrentTime,
  setDuration,
  setVolume,
  setLoop,
  setSrcAudio,
  setAutoPlay,
  setPlaylistSong,
  setCurrnetIndexPlaylist,
  setOpenLyric,
  setSongDetail,
  updateIndexCardActive,
  setAudioRef,
  setRandom
} = audioSlice.actions

const audioReducer = audioSlice.reducer
export default audioReducer
