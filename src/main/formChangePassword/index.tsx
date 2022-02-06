import React, { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import FormChangePasswordPage from './FormChangePasswordPage';
import { defaultValues, Inputs, schema } from './utils';
import { showMessageError } from '../../utils/helper';
import { changePasswordClass } from '../../services/auth/changePassword';
import { callAPI, callAPICatch } from '../../utils/callAPI';
import { setActive } from '../../redux/reducers/reducerBlockUI';

const FormChangePassword = ():JSX.Element => {

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

        callAPICatch({ service: changePasswordClass, typeService: "verifyTokenURL", data: {token}, dispatch, history });

    }, [dispatch, params, history]);
    
    const changePassword = (model:Inputs):void => {

        const { password, repeatPassword } = model;
        const { token }:any = params;
        const data = { password, repeatPassword, token };

        dispatch( setActive() );
        callAPI({ service: changePasswordClass, typeService: "changePassword", data, dispatch, history });
    }

    return <FormChangePasswordPage
        changePassword={changePassword}
        control={control}
        handleSubmit={handleSubmit}
    />
}

export default FormChangePassword;