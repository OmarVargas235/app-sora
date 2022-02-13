import React from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button, { ButtonProps } from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import { CLOSE_MODAL_CREATEUSER } from '../types';
import BootstrapInput from '../../../layaut/BootstrapInput';
import AutoCompletePage from '../../../layaut/AutoCompletePage';
import ButtonPage from '../../../layaut/Button';
import { grayLight, gray } from '../../../assets/css/colors';

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

const CreateUserPage = ({ openModal, dispatchUser, createUser, handleSubmit, control }:any):JSX.Element => (
    <Modal
        keepMounted
        open={openModal}
        onClose={() => dispatchUser({type: CLOSE_MODAL_CREATEUSER})}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
    >
        <Box sx={style}>
            <header className='mx-6 flex justify-between'>
                <Typography id="keep-mounted-modal-title" variant="h6" component="h6">
                    Usuarios
                </Typography>

                <Icon
                    className='cursor-pointer'
                    onClick={() => dispatchUser({type: CLOSE_MODAL_CREATEUSER})}
                >close_icon</Icon>
            </header>

            <Divider />
            
            <main className='mx-6 mt-10'>
                <form
                    onSubmit={handleSubmit(createUser)}
                >
                    <Grid container className='mb-3 flex items-center text-sm'>
                        <Grid item xs={3}>
                            <span>Username:</span>
                        </Grid>

                        <Grid item xs={9}>
                            <BootstrapInput
                                control={control}
                                name="username"
                                isPadding={false}
                            />
                        </Grid>
                    </Grid>

                    <Grid container className='mb-3 flex items-center text-sm'>
                        <Grid item xs={3}>
                            <span>Nombre: <span className='text-red-600'>*</span></span>
                        </Grid>

                        <Grid item xs={9}>
                            <BootstrapInput
                                control={control}
                                name="name"
                                isPadding={false}
                            />
                        </Grid>
                    </Grid>

                    <Grid container className='mb-3 flex items-center text-sm'>
                        <Grid item xs={3}>
                            <span>Email: <span className='text-red-600'>*</span></span>
                        </Grid>

                        <Grid item xs={9}>
                            <BootstrapInput
                                control={control}
                                name="email"
                                isPadding={false}
                            />
                        </Grid>
                    </Grid>

                    <Grid container className='mb-3 flex items-center text-sm'>
                        <Grid item xs={3}>
                            <span>Area: <span className='text-red-600'>*</span></span>
                        </Grid>

                        <Grid item xs={9}>
                            <AutoCompletePage
                                // control={control}
                                // name="permits"
                                isPadding={false}
                            />
                        </Grid>
                    </Grid>

                    <Grid container className='mb-3 flex items-center text-sm'>
                        <Grid item xs={3}>
                            <span>Permisos: <span className='text-red-600'>*</span></span>
                        </Grid>

                        <Grid item xs={9}>
                            <AutoCompletePage
                                // control={control}
                                // name="permits"
                                isPadding={false}
                            />
                        </Grid>
                    </Grid>

                    <div className='flex justify-end mt-8'>
                        <ColorButton
                            variant="outlined"
                            className="mr-3"
                        >Guardar</ColorButton>

                        <ColorButton
                            variant="outlined"
                        >Cancelar</ColorButton>
                    </div>
                </form>
            </main>
        </Box>
    </Modal>
)

export default CreateUserPage;