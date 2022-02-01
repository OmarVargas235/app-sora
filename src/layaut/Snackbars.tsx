import React, { useState, useEffect, ComponentType } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';
import MuiAlert from '@mui/material/Alert';

import { RootState } from '../redux/reducers/';
import { hiddenMessage } from '../redux/reducers/reducerSnack';

type TransitionProps = Omit<SlideProps, 'direction'>;

interface IShowSnack extends SnackbarOrigin {
    open: boolean;
}

// interface IDictTransitions {
//     left: (props: TransitionProps) => JSX.Element;
//     right: (props: TransitionProps) => JSX.Element;
//     up: (props: TransitionProps) => JSX.Element;
//     down: (props: TransitionProps) => JSX.Element;
// }

function TransitionDown(props: TransitionProps) {
    return <Slide {...props} direction="down" />;
}

function TransitionUp(props: TransitionProps) {
    return <Slide {...props} direction="up" />;
}

function TransitionLeft(props: TransitionProps) {
    return <Slide {...props} direction="left" />;
}

function TransitionRight(props: TransitionProps) {
    return <Slide {...props} direction="right" />;
}

const dictTransitions:any = {
    left: TransitionLeft,
    right: TransitionRight,
    up: TransitionUp,
    down: TransitionDown,
}

const Snackbars = () => {

    const dispatch = useDispatch();
    const { snack } = useSelector((state:RootState) => state);
    const { messages, severity } = snack;
    
    const [showSnack, setShowSnack] = useState<IShowSnack>({
        open: false,
        vertical: snack.vertical,
        horizontal: snack.horizontal,
    });

    const [transition, setTransition] = useState<ComponentType<TransitionProps> | undefined>(undefined);

    const { vertical, horizontal, open } = showSnack;

    useEffect(() => {

        const { directionTransition, time } = snack;
        
        setShowSnack(state => ({...state, open: snack.open}));
        setTransition(() => dictTransitions[directionTransition]);

        time && setTimeout(() => {

            setShowSnack(state => ({...state, open: false}));
            dispatch( hiddenMessage() );

        }, time);

        return () => {
            setShowSnack({
                open: false,
                vertical: snack.vertical,
                horizontal: snack.horizontal,
            });
        }

    }, [snack, dispatch]);

    const handleClose = () => {

        setShowSnack({ ...showSnack, open: false });
        dispatch( hiddenMessage() );
    }
    
    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            key={vertical + horizontal}
            TransitionComponent={transition}
        >
            <MuiAlert
                elevation={6}
                variant="filled"
                onClose={handleClose}
                severity={severity}
                sx={{ width: '100%' }}
            >
                <ul>
                    {
                        messages.map((msg:string, index:number) => (
                            <li key={index}>{msg}</li>
                        ))
                    }
                </ul>
            </MuiAlert>
        </Snackbar>
    )
}

export default Snackbars;