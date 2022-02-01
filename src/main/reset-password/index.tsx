import React from 'react';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

import ResetPasswordPage from './ResetPasswordPage';
import { Inputs, defaultValues, schema } from './utils';

const ResetPassword = ():JSX.Element => {

    const { handleSubmit, control, formState:{errors} } = useForm<Inputs>({
        defaultValues,
        resolver: yupResolver(schema),
    });

    const changePassword = (model:Inputs):void => {

        // const submitLogin = context?.submitLogin;

        // if (!submitLogin) return;

        // dispatch( submitLogin(model) );
    }
    
    return <ResetPasswordPage
        changePassword={changePassword}
        control={control}
        handleSubmit={handleSubmit}
    />
}

export default ResetPassword;