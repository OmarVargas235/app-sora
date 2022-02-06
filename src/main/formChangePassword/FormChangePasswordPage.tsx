import React from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';

import LayautFormLoginAndReset from '../../layaut/LayautFormLoginAndReset';
import BootstrapInput from '../../layaut/BootstrapInput';
import { Inputs } from './utils';

interface IProps {
    changePassword: (model:Inputs)=>void;
    handleSubmit: UseFormHandleSubmit<Inputs>;
    control:any;
}

const FormChangePasswordPage = ({ changePassword, control, handleSubmit }:IProps):JSX.Element => (
    <LayautFormLoginAndReset
        title="Restablecer contraseña"
        textBtn="Restablecer"
        textLink="Iniciar sesión"
        path="/login"
        onSubmit={changePassword}
        handleSubmit={handleSubmit}
    >
        <BootstrapInput
            classes="mb-2"
            placeholder='Ingrese la contraseña'
            name="password"
            control={control}
            type="password"
        />

        <BootstrapInput
            classes="mb-8"
            placeholder='Repita la contraseña'
            name="repeatPassword"
            control={control}
            type="password"
        />
    </LayautFormLoginAndReset>
);

export default FormChangePasswordPage;