import React, { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import FormChangePasswordPage from './FormChangePasswordPage';
import { defaultValues, Inputs, schema } from './utils';
import { showMessageError } from '../../utils/helper';
import { changePasswordClass } from '../../services/auth/changePassword';
import { showMessage } from '../../redux/reducers/reducerSnack';

const FormChangePassword = () => {

    const dispatch = useDispatch();

    const params = useParams();
    const history = useHistory();

    const { handleSubmit, control, formState:{errors} } = useForm<Inputs>({
        defaultValues,
        resolver: yupResolver(schema),
    });

    useEffect(() => showMessageError({ errors, dispatch }), [errors, dispatch]);

    useEffect(() => {

        if ( Object.keys(params).length === 0 ) return;

        const { token }:any = params;

        changePasswordClass
            .verifyTokenURL(token)
            .catch(err => {

                err && dispatch( showMessage({
                    time: 9000,
                    message: ["Solicita otro cambio de contraseña, por favor"],
                    severity: "warning",
                }) );

                err && history.replace('/');
            } );

    }, []);
    
    const changePassword = (model:Inputs):void => {

        const { password, repeatPassword } = model;
        const { token }:any = params;
        
        changePasswordClass
            .changePassword(password, repeatPassword, token)
            .then(resp => {

                dispatch( showMessage({
                    time: 9000,
                    message: [resp],
                    severity: "success",
                }));

                history.replace('/');
            })
            .catch(err => dispatch( showMessage({
                time: 9000,
                message: Array.isArray(err) ? err : [err],
                severity: "error",
            }) ));
    }

    return <FormChangePasswordPage
        changePassword={changePassword}
        control={control}
        handleSubmit={handleSubmit}
    />
}

export default FormChangePassword;