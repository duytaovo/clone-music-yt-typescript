// src/features/userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Path } from 'src/types/types.type';

export interface PathState {
    path:{
        preRoute?:Path,
        currentRoute?:Path
    }
}

const initialState:PathState = {
  path:{
    preRoute:{},
    currentRoute:{}
  }
}

const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    updateHistory: (state, action: PayloadAction<{
        preRoute: Path
        currentRoute: Path
    }>) => {
       state.path = action.payload
    },
  }
});

export const {updateHistory} = routeSlice.actions
const routeReducer = routeSlice.reducer;
export default routeReducer
