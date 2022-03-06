import { createSlice } from '@reduxjs/toolkit';

export interface IInitState {
    isOpen:boolean;
}

const initialState: IInitState = {
    isOpen: false,
}

export const openLayautAppSlice = createSlice({
    name: 'isOpenNabvarLeft',
    initialState,
    reducers: {
        setActive: () => ({
            isOpen: true,
        }),
        setDesactive: () => ({
            isOpen: false,
        }),
    },
})

// Action creators are generated for each case reducer function
export const { setActive, setDesactive } = openLayautAppSlice.actions;

export default openLayautAppSlice.reducer;