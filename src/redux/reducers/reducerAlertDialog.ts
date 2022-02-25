import { createSlice } from '@reduxjs/toolkit';

interface IInitState {
    isActive:boolean;
    yes:boolean;
}

const initialState: IInitState = {
    isActive: false,
    yes: false,
}

export const alertDialog = createSlice({
    name: 'alertDialog',
    initialState,
    reducers: {
        setActiveAlertDialog: (state) => ({
            ...state,
            isActive: true,
        }),
        setDesactiveAlertDialog: (state) => ({
            ...state,
            isActive: false,
        }),
        setYes: (state) => ({
            ...state,
            yes: true,
        }),
        setNo: (state) => ({
            ...state,
            yes: false,
        }),
    },
})

// Action creators are generated for each case reducer function
export const { setActiveAlertDialog, setDesactiveAlertDialog, setYes, setNo } = alertDialog.actions;

export default alertDialog.reducer;