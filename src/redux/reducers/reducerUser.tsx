import { createSlice } from '@reduxjs/toolkit';

export interface IInitState {
  email: string;
  name: string;
  id: string;
}

const initialState: IInitState = {
  name: "",
  email: "",
  id: "",
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
  },
})

// Action creators are generated for each case reducer function
export const { setDataUser } = userSlice.actions

export default userSlice.reducer;