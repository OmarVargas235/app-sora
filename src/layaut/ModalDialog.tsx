import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { RootState } from '../redux/reducers/';
import { setDesactiveAlertDialog, setYes, setNo } from "../redux/reducers/reducerAlertDialog";
import { blue } from '../assets/css/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: blue,
        },
    },
});

const AlertDialog = ():JSX.Element => {

    const dispatch = useDispatch();

    const { alertDialog:{ isActive } } = useSelector((state:RootState) => state);
    
    const handleClose = (e:React.FormEvent<HTMLElement>) => {

        const target:any = e.target;
        const text = target.textContent;

        dispatch( setDesactiveAlertDialog() );

        text === 'Si' && dispatch( setYes() );
        text === 'No' && dispatch( setNo() );
    }

    return (
        <Dialog
            open={isActive}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Esta seguro de querer realizar esta acción
            </DialogTitle>

            <DialogActions>
                <ThemeProvider theme={theme}>
                    <Button onClick={handleClose}>Si</Button>
                    <Button onClick={handleClose} autoFocus>No</Button>
                </ThemeProvider>
            </DialogActions>
        </Dialog>
    );
}

export default AlertDialog;