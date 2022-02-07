import { createSlice } from '@reduxjs/toolkit';

import { IModule } from '../../utils/interface';

export interface IInitState {
  email: string;
  name: string;
  id: string;
  tokenURL:string;
  modules: IModule[];
}

const initialState: IInitState = {
  name: "",
  email: "",
  id: "",
  tokenURL: "",
  modules: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setDataUser: (state, action) => {
      
      const { payload } = action;

      return {
        ...payload,
      }
    },
    setTokenURL: (state, action) => ({
      ...state,
      tokenURL: action.payload,
    }),
  },
})

// Action creators are generated for each case reducer function
export const { setDataUser, setTokenURL } = userSlice.actions

export default userSlice.reducer;