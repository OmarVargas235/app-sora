import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

import { Inputs, defaultValues, schema } from './utils';
import { showMessageError } from '../../utils/helper';
import { changePasswordClass } from '../../services/auth/changePassword';
import { showMessage } from '../../redux/reducers/reducerSnack';
import { setTokenURL } from '../../redux/reducers/reducerUser';
import SendResetPasswordPage from './SendResetPasswordPage';
import { setActive } from '../../redux/reducers/reducerBlockUI';
import { callAPI } from '../../utils/callAPI';

const SendResetPassword = ():JSX.Element => {

    const dispatch = useDispatch();

    const { handleSubmit, control, formState:{errors} } = useForm<Inputs>({
        defaultValues,
        resolver: yupResolver(schema),
    });

    useEffect(() => showMessageError({ errors, dispatch }), [errors, dispatch]);
    
    const changePassword = (model:Inputs):void => {

        dispatch( setActive() );
        
        callAPI({ service: changePasswordClass, typeService: "sendEmail", data: model, dispatch, history: null });
    }
    
    return <SendResetPasswordPage
        changePassword={changePassword}
        control={control}
        handleSubmit={handleSubmit}
    />
}

export default SendResetPassword;