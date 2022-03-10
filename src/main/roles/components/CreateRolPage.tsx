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
    createAndEditUser:(model:Inputs)=>void;
    handleSubmit:any;
    control:any;
    dataAreas:TypesAutocomplete[];
    dataRoles:TypesAutocomplete[];
    closeModal:()=>void;
}

const CreateRolPage = ({ openModal, dispatchUser, createAndEditUser, handleSubmit, control, dataAreas, dataRoles, closeModal }:IProps):JSX.Element => (
    <ModalForm
        openModal={openModal}
        dispatch={dispatchUser}
        handleSubmit={handleSubmit}
        onSubmit={createAndEditUser}
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
                    name="rol"
                    isPadding={false}
                />
            </Grid>
        </Grid>
    </ModalForm>
)

export default CreateRolPage;