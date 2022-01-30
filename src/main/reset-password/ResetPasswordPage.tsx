import React from 'react';

import BootstrapInput from '../../layaut/BootstrapInput';
import LayautFormLoginAndReset from '../../layaut/LayautFormLoginAndReset';
import {  } from '../../assets/css/colors';

const ResetPasswordPage = ():JSX.Element => (
<div className='flex justify-center items-center min-h-screen background-gray'>
        <LayautFormLoginAndReset
            title="Restablecer contraseña"
            textBtn="Restablecer"
            textLink="Iniciar sesión"
            path="/login"
        >
            <BootstrapInput
                classes="mb-10"
                placeholder='Usuario o Correo'
            />
        </LayautFormLoginAndReset>
    </div>
)

export default ResetPasswordPage;