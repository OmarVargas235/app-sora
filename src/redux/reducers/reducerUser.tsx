import { createSlice } from '@reduxjs/toolkit';

export interface IInitState {
  email: string;
  name: string;
  id: string;
  tokenURL:string;
}

const initialState: IInitState = {
  name: "",
  email: "",
  id: "",
  tokenURL: "",
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