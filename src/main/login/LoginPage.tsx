import React from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';

import BootstrapInput from '../../layaut/BootstrapInput';
import LayautFormLoginAndReset from '../../layaut/LayautFormLoginAndReset';
import { Inputs } from './utils';

interface IProps {
    signIn: (model:Inputs)=>void;
    handleSubmit: UseFormHandleSubmit<Inputs>;
    control:any;
}

const LoginPage = ({ control, handleSubmit, signIn }:IProps):JSX.Element => (
    <div className='flex justify-center items-center min-h-screen background-gray'>
        <LayautFormLoginAndReset
            title="Iniciar Sesion"
            textBtn="Login"
            textLink="Olvidastes tu contraseña"
            path="/resetpassword"
            onSubmit={signIn}
            handleSubmit={handleSubmit}
        >
            <BootstrapInput
                control={control}
                classes="mb-2"
                placeholder='Usuario'
                name="email"
            />

            <BootstrapInput
                control={control}
                classes="mb-7"
                placeholder='Contraseña'
                name="password"
                type="password"
            />
        </LayautFormLoginAndReset>
    </div>
)

export default LoginPage