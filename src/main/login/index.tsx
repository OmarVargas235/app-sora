import React, { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

import LoginPage from './LoginPage';
import { AuthContext } from '../../auth/AuthProvider';
import { defaultValues, schema, Inputs } from './utils';
import { showMessage } from '../../redux/reducers/reducerSnack';

function Login():JSX.Element {

  const dispatch = useDispatch();

  const { handleSubmit, control, formState:{errors} } = useForm<Inputs>({
    defaultValues,
    resolver: yupResolver(schema),
	});

  const context = useContext(AuthContext);

  useEffect(() => {

    if (Object.keys(errors).length === 0) return;

    const messages:(string|undefined)[] = Object.values(errors).map(msg => msg.message);
    
    dispatch( showMessage({
      time: 3000,
      message: messages,
      severity: "error",
    }) );
  
  }, [errors, dispatch]);
  

  const signIn = (model:Inputs):void => {

    const submitLogin = context?.submitLogin;

    if (!submitLogin) return;

    dispatch( submitLogin(model) );
  }
  
  return <LoginPage
    control={control}
    handleSubmit={handleSubmit}
    signIn={signIn}
  />
}

export default Login;
