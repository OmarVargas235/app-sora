import React from 'react';

import BootstrapInput from '../../../layaut/BootstrapInput';
import LayautFormLoginAndReset from '../../../layaut/LayautFormLoginAndReset';

const LoginPage = ():JSX.Element => (
    <div className='flex justify-center items-center min-h-screen background-gray'>
        <LayautFormLoginAndReset
            title="Iniciar Sesion"
            textBtn="Login"
            textLink="Olvidastes tu contraseña"
            path="/resetpassword"
        >
            <BootstrapInput
                classes="mb-2"
                placeholder='Usuario'
            />

            <BootstrapInput
                classes="mb-7"
                placeholder='Contraseña'
            />
        </LayautFormLoginAndReset>
    </div>
)

export default LoginPage;
