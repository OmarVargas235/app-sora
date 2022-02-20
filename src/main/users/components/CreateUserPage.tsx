import React from 'react';

import Grid from '@mui/material/Grid';

import BootstrapInput from '../../../layaut/BootstrapInput';
import AutoCompletePage from '../../../layaut/AutoCompletePage';
import ModalForm from '../../../layaut/ModalForm';
import { Inputs } from '../utils';
import { TypesAutocomplete } from '../../../utils/interface';

interface IProps {
    openModal:boolean;
    dispatchUser:(action:{type:string, payload?:any})=>void;
    createUser:(model:Inputs)=>void;
    handleSubmit:any;
    control:any;
    dataAreas:TypesAutocomplete[];
    dataRoles:TypesAutocomplete[];
    closeModal:()=>void;
}

const CreateUserPage = ({ openModal, dispatchUser, createUser, handleSubmit, control, dataAreas, dataRoles, closeModal }:IProps):JSX.Element => (
    <ModalForm
        openModal={openModal}
        dispatch={dispatchUser}
        handleSubmit={handleSubmit}
        onSubmit={createUser}
        title="Usuarios"
        closeModal={closeModal}
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
                    type="email"
                    isPadding={false}
                />
            </Grid>
        </Grid>

        <Grid container className='mb-3 flex items-center text-sm'>
            <Grid item xs={3}>
                <span>Password: <span className='text-red-600'>*</span></span>
            </Grid>

            <Grid item xs={9}>
                <BootstrapInput
                    control={control}
                    name="password"
                    type="password"
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
                    data={dataAreas}
                    isPadding={false}
                    name="idArea"
                    control={control}
                />
            </Grid>
        </Grid>
        
        <Grid container className='mb-3 flex items-center text-sm'>
            <Grid item xs={3}>
                <span>Permisos: <span className='text-red-600'>*</span></span>
            </Grid>

            <Grid item xs={9}>
                <AutoCompletePage
                    data={dataRoles}
                    isPadding={false}
                    name="idRol"
                    control={control}
                />
            </Grid>
        </Grid>
    </ModalForm>
)

export default CreateUserPage;