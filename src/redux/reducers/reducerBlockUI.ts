import { createSlice } from '@reduxjs/toolkit';

export interface IInitState {
  isActive:boolean;
}

const initialState: IInitState = {
  isActive: false,
}

export const blockUISlice = createSlice({
  name: 'blockUI',
  initialState,
  reducers: {
    setActive: () => ({
      isActive: true,
    }),
    setDesactive: () => ({
      isActive: false,
    })
  },
})

// Action creators are generated for each case reducer function
export const { setActive, setDesactive } = blockUISlice.actions

export default blockUISlice.reducer;