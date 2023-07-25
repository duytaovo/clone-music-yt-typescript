// src/features/userSlice.ts

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import playListApi from 'src/apis/playList.api';
import { payloadCreator } from 'src/utils/utils';


export const getPlayList = createAsyncThunk('playlist/getPlayList', payloadCreator(playListApi.getPlayList))
export const getSongDetail = createAsyncThunk('playlist/getSongDetail', payloadCreator(playListApi.getDetailSongFromPlayList))
export const getSongSound = createAsyncThunk('playlist/getSongSound', payloadCreator(playListApi.getSongSound))


interface auth {
  isLogin: boolean
}

const initialState:auth={
  isLogin:false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    
    updateStatusLogin:(state,action:PayloadAction<boolean>) =>{
      state.isLogin = action.payload
    },
  },
  extraReducers: builder => {
    // The `builder` callback form is used here because it provides correctly typed reducers from the action creators
    // builder.addCase(getPlayList.fulfilled, (state, { payload }) => {
    //   state.playlist = payload
    // })
  }
});

export const {updateStatusLogin} = authSlice.actions
const authReducer = authSlice.reducer;
export default authReducer
