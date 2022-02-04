import React from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';

import BootstrapInput from '../../layaut/BootstrapInput';
import LayautFormLoginAndReset from '../../layaut/LayautFormLoginAndReset';
import { Inputs } from './utils';

interface IProps {
    changePassword: (model:Inputs)=>void;
    handleSubmit: UseFormHandleSubmit<Inputs>;
    control:any;
}

const SendResetPasswordPage = ({ changePassword, control, handleSubmit }:IProps):JSX.Element => (
    <LayautFormLoginAndReset
        title="Restablecer contraseña"
        textBtn="Restablecer"
        textLink="Iniciar sesión"
        path="/login"
        onSubmit={changePassword}
        handleSubmit={handleSubmit}
    >
        <BootstrapInput
            classes="mb-10"
            placeholder='Usuario o Correo'
            name="email"
            control={control}
        />
    </LayautFormLoginAndReset>
)

export default SendResetPasswordPage;