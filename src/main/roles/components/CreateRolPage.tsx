import React from 'react';

import Grid from '@mui/material/Grid';

import BootstrapInput from '../../../layaut/BootstrapInput';
import ModalForm from '../../../layaut/ModalForm';
import { Inputs } from '../utils';

interface IProps {
    openModal:boolean;
    dispatchRoles:(action:{type:string, payload?:any})=>void;
    createAndEditRol:(model:Inputs)=>void;
    handleSubmit:any;
    control:any;
    closeModal:()=>void;
}

const CreateRolPage = ({ openModal, dispatchRoles, createAndEditRol, handleSubmit, control, closeModal }:IProps):JSX.Element => (
    <ModalForm
        openModal={openModal}
        dispatch={dispatchRoles}
        handleSubmit={handleSubmit}
        onSubmit={createAndEditRol}
        title="Roles"
        closeModal={closeModal}
    >
        <Grid container className='mb-3 flex items-center text-sm'>
            <Grid item xs={2}>
                <span>Id:</span>
            </Grid>

            <Grid item xs={10}>
                <BootstrapInput
                    control={control}
                    name="id"
                    isPadding={false}
                />
            </Grid>
        </Grid>

        <Grid container className='mb-3 flex items-center text-sm'>
            <Grid item xs={2}>
                <span>Rol: <span className='text-red-600'>*</span></span>
            </Grid>

            <Grid item xs={10}>
                <BootstrapInput
                    control={control}
                    name="nameRol"
                    isPadding={false}
                />
            </Grid>
        </Grid>
    </ModalForm>
)

export default CreateRolPage;