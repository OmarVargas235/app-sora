import React, { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

import LoginPage from './LoginPage';
import { AuthContext } from '../../auth/AuthProvider';
import { defaultValues, schema, Inputs } from './utils';
import { showMessageError } from '../../utils/helper';
import { setActive } from '../../redux/reducers/reducerBlockUI';

function Login():JSX.Element {

  const dispatch = useDispatch();

  const { handleSubmit, control, formState:{errors} } = useForm<Inputs>({
    defaultValues,
    resolver: yupResolver(schema),
	});

  const context = useContext(AuthContext);

  useEffect(() => showMessageError({ errors, dispatch }), [errors, dispatch]);

  const signIn = (model:Inputs):void => {

    const submitLogin = context?.submitLogin;

    if (!submitLogin) return;

    dispatch( setActive() );
    dispatch( submitLogin(model) );
  }
  
  return <LoginPage
    control={control}
    handleSubmit={handleSubmit}
    signIn={signIn}
  />
}

export default Login;
