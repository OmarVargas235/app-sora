import React, { useState, useEffect, useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';

import CreateUserPage from '../components/CreateUserPage';
import { UserContext } from '../ContextProvider';
import { defaultValues, schema, Inputs } from '../utils';
import { TypesAutocomplete } from '../../../utils/interface';
import { showMessageError } from '../../../utils/helper';
import { serviceUser } from '../../../services/user';
import { callAPI } from '../../../utils/callAPI';
import { setActive } from '../../../redux/reducers/reducerBlockUI';
import { CLOSE_MODAL_CREATEUSER } from '../types';

const CreateUser = ():JSX.Element => {

    const dispatch = useDispatch();

    const { handleSubmit, control, formState:{errors}, setValue, clearErrors } = useForm<Inputs>({
        defaultValues,
        resolver: yupResolver(schema),
    });

    const { stateUser:{ openModal, dataAreas, dataRoles }, dispatchUser }:any = useContext( UserContext );

    const [areas, setAreas] = useState<TypesAutocomplete[]>([]);
    const [roles, setRoles] = useState<TypesAutocomplete[]>([]);

    useEffect(() => showMessageError({ errors, dispatch }), [errors, dispatch]);
    
    // Setear la estrucutra de los objetos de area --> {label: description, id: _id}
    useEffect(() => {

        const setDataAreas = dataAreas.map(({ description, _id }:{description:string, _id:string}) => ({label: description, id: _id}));

        setAreas(setDataAreas);

    }, [dataAreas]);

    // Setear la estrucutra de los objetos de roles --> {label: name, id: _id}
    useEffect(() => {

        const setDataRoles = dataRoles.map(({ name, _id }:{name:string, _id:string}) => ({label: name, id: _id}));

        setRoles(setDataRoles);

    }, [dataRoles]);

    const closeModal = ():void => {

        dispatchUser({ type: CLOSE_MODAL_CREATEUSER });
        clearErrors();
        ["username", "name", "email", "idArea", "idRol", "password"].forEach((value:any) => setValue(value, "") );
    }
    
    const createUser = (model:Inputs):void => {

        const { idRol, idArea }:any = model;

        model.idRol = idRol.id;
        model.idArea = idArea.id;
        
        callAPI({ service: serviceUser, typeService: 'registerUser', data: model, dispatch, dispatchReducer: dispatchUser, closeModal });

        dispatch( setActive() );
    }

    return <CreateUserPage
        openModal={openModal}
        dispatchUser={dispatchUser}
        createUser={createUser}
        handleSubmit={handleSubmit}
        control={control}
        dataAreas={areas}
        dataRoles={roles}
        closeModal={closeModal}
    />
}

export default CreateUser;