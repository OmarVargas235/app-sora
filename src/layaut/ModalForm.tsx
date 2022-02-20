import React, { ReactChildren, ReactChild } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button, { ButtonProps } from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';
import { styled } from '@mui/material/styles';

import { grayLight } from '../assets/css/colors';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(grayLight),
    border: '1px solid '+grayLight,
    opacity: ".8",
    '&:hover': {
        border: '1px solid '+grayLight,
        backgroundColor: grayLight,
    },
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    py: 2,
    borderRadius: "4px",
    outline: 0,
};

interface IProps {
    openModal:boolean;
    dispatch:(action:{type:string, payload?:any})=>void;
    closeModal:()=>void;
    handleSubmit:any;
    onSubmit:(model:any)=>void;
    children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
    title:string;
}

const ModalForm = ({ openModal, dispatch, handleSubmit, onSubmit, title, children, closeModal }:IProps):JSX.Element => (
    <Modal
        keepMounted
        open={openModal}
        onClose={closeModal}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
    >
        <Box sx={style}>
            <header className='mx-6 flex justify-between'>
                <Typography id="keep-mounted-modal-title" variant="h6" component="h6">
                    {title}
                </Typography>

                <Icon
                    className='cursor-pointer'
                    onClick={closeModal}
                >close_icon</Icon>
            </header>

            <Divider />
            
            <main className='mx-6 mt-10'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {children}

                    <div className='flex justify-end mt-8'>
                        <ColorButton
                            variant="outlined"
                            className="mr-3"
                            type='submit'
                        >Guardar</ColorButton>

                        <ColorButton
                            variant="outlined"
                            onClick={closeModal}
                        >Cancelar</ColorButton>
                    </div>
                </form>
            </main>
        </Box>
    </Modal>
);

export default ModalForm;