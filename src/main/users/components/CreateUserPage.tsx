import React from 'react';

import Grid from '@mui/material/Grid';

import { CLOSE_MODAL_CREATEUSER, OPEN_MODAL_CREATEUSER } from '../types';
import BootstrapInput from '../../../layaut/BootstrapInput';
import AutoCompletePage from '../../../layaut/AutoCompletePage';
import ModalForm from '../../../layaut/ModalForm';
import { Inputs } from '../utils';

interface IProps {
    openModal:boolean;
    dispatchUser:(action:{type:string, payload?:any})=>void;
    createUser:(model:Inputs)=>void;
    handleSubmit:any;
    control:any;
}

const CreateUserPage = ({ openModal, dispatchUser, createUser, handleSubmit, control }:IProps):JSX.Element => (
    <ModalForm
        openModal={openModal}
        dispatch={dispatchUser}
        OPEN={OPEN_MODAL_CREATEUSER}
        CLOSE={CLOSE_MODAL_CREATEUSER}
        handleSubmit={handleSubmit}
        onSubmit={createUser}
        title="Usuarios"
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
    </ModalForm>
)

export default CreateUserPage;