import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

import ResetPasswordPage from './ResetPasswordPage';
import { Inputs, defaultValues, schema } from './utils';
import { showMessageError } from '../../utils/helper';
import { changePasswordClass } from '../../services/auth/changePassword';
import { showMessage } from '../../redux/reducers/reducerSnack';

const ResetPassword = ():JSX.Element => {

    const dispatch = useDispatch();

    const { handleSubmit, control, formState:{errors} } = useForm<Inputs>({
        defaultValues,
        resolver: yupResolver(schema),
    });

    useEffect(() => {

        showMessageError({ errors, dispatch });
    
    }, [errors, dispatch]);
    

    const changePassword = (model:Inputs):void => {

        const { email } = model;
        changePasswordClass
            .changePasswordByEmail(email)
            .then(resp => dispatch( showMessage({
                time: 9000,
                message: [resp],
                severity: "success",
            }) ))
            .catch(err => dispatch( showMessage({
                time: 9000,
                message: Array.isArray(err) ? err : [err],
                severity: "error",
            }) ));
    }
    
    return <ResetPasswordPage
        changePassword={changePassword}
        control={control}
        handleSubmit={handleSubmit}
    />
}

export default ResetPassword;