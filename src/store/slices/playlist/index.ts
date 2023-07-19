// src/features/userSlice.ts

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import playListApi from 'src/apis/playList.api';
import { payloadCreator } from 'src/utils/utils';


export const getPlayList = createAsyncThunk('playlist/getPlayList', payloadCreator(playListApi.getPlayList))
export const getSongDetail = createAsyncThunk('playlist/getSongDetail', payloadCreator(playListApi.getDetailSongFromPlayList))
export const getSongSound = createAsyncThunk('playlist/getSongSound', payloadCreator(playListApi.getSongSound))

interface SongState {
  playlist: any,
  routes:string[],
}

const initialState: SongState = {
  playlist: [],
  routes:["/"],
}

const playListSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    addUrlToHistory: (state, action: PayloadAction<string>) => {
      state.routes.push(action.payload);
    },
    removeFirstUrl: (state) => {
      state.routes.shift();
    },
    updateHistory: (state, action: PayloadAction<string>) => {
      const newUrl = action.payload;
      const currentUrl = state.routes[1];
      if (newUrl !== currentUrl) {
        // Nếu route mới khác với route hiện tại, thực hiện cập nhật lịch sử
        state.routes = state.routes.slice(2); // Xóa route đầu tiên
        state.routes.push(newUrl); // Đẩy route mới vào đầu mảng
      }
    },
  },
  extraReducers: builder => {
    // The `builder` callback form is used here because it provides correctly typed reducers from the action creators
    builder.addCase(getPlayList.fulfilled, (state, { payload }) => {
      state.playlist = payload
    })
  
  }
});

export const {addUrlToHistory,removeFirstUrl,updateHistory} = playListSlice.actions
const playListReducer = playListSlice.reducer;
export default playListReducer
