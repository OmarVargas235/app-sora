import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SnackbarOrigin } from '@mui/material/Snackbar';

interface ISnackState extends SnackbarOrigin {
    open: boolean;
    directionTransition: string;
    time:number|null;
    messages:string[];
    severity:"error" | "success" | "info" | "warning" | undefined;
}

const initialState: ISnackState = {
    open: false,
    vertical: "top", // top, bottom
    horizontal: "center", // left, center, right
    directionTransition: "down", // left, up, right, down
    time: null, // null -> without time, >= 0 -> isTime=true
    messages: [],
    severity: "info", // error, warning, info, success
}

export const snackSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showMessage: (state, action:PayloadAction<Object>) => {
        
        const { payload }:PayloadAction<any> = action;

        return {
            ...state,
            open: true,
            messages: payload?.message,
            severity: payload?.severity,
            time: payload?.time,
        }
    },
    hiddenMessage: (state) => ({
        ...state,
        open: false,
    })
  },
})

// Action creators are generated for each case reducer function
export const { showMessage, hiddenMessage } = snackSlice.actions

export default snackSlice.reducer;