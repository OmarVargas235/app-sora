import React, { useState, useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

import CreateUserPage from '../components/CreateUserPage';
import { UserContext } from '../ContextProvider';
import { defaultValues, schema, Inputs } from '../utils';

const CreateUser = ():JSX.Element => {

    const { handleSubmit, control, formState:{errors} } = useForm<Inputs>({
        defaultValues,
        resolver: yupResolver(schema),
    });

    const { stateUser:{ openModal }, dispatchUser }:any = useContext( UserContext );

    const createUser = (model:Inputs):void => {

        console.log(model);

        // const submitLogin = context?.submitLogin;

        // if (!submitLogin) return;

        // dispatch( setActive() );
        // dispatch( submitLogin(model) );
    }

    return <CreateUserPage
        openModal={openModal}
        dispatchUser={dispatchUser}
        createUser={createUser}
        handleSubmit={handleSubmit}
        control={control}
    />
}

export default CreateUser;