import React, { useEffect, useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';

import CreateRolPage from '../components/CreateRolPage';
import { RolesContext } from '../ContextProvider';
import { defaultValues, schema, Inputs } from '../utils';
import { showMessageError } from '../../../utils/helper';
import { serviceRoles } from '../../../services/roles';
import { callAPI } from '../../../utils/callAPI';
import { setActive } from '../../../redux/reducers/reducerBlockUI';
import { CLOSE_MODAL_CREATEROL, UPDATE_ROL } from '../types';
import { usePreLoadDataForm } from '../../../customHooks/usePreLoadDataForm';

const valuesForm:string[] = ["id", "nameRol"];

const CreateRol = ():JSX.Element => {

    const dispatch = useDispatch();

    const { handleSubmit, control, formState:{errors}, setValue, clearErrors } = useForm<Inputs>({
        defaultValues,
        resolver: yupResolver(schema),
    });

    const { stateRoles:{ openModal, updateRol, dataEdit }, dispatchRoles }:any = useContext( RolesContext );
    
    usePreLoadDataForm({ dataEdit, setValue, valuesForm });

    useEffect(() => showMessageError({ errors, dispatch }), [errors, dispatch]);

    const closeModal = ():void => {

        dispatchRoles({ type: CLOSE_MODAL_CREATEROL });
        clearErrors();
        valuesForm.forEach((value:any) => setValue(value, "") );
    }
    
    const createAndEditRol = (model:Inputs):void => {
        
        const isEdit:boolean = Object.keys(dataEdit).length > 0;
        const typeService = isEdit ? 'editRol' : 'registerRol';
        model._id = isEdit ? dataEdit['_id'] : null;

        callAPI({ service: serviceRoles, typeService, data: model, dispatch, dispatchReducer: dispatchRoles, closeModal, update: updateRol, UPDATE: UPDATE_ROL });

        dispatch( setActive() );
    }

    return <CreateRolPage
        openModal={openModal}
        dispatchRoles={dispatchRoles}
        createAndEditRol={createAndEditRol}
        handleSubmit={handleSubmit}
        control={control}
        closeModal={closeModal}
    />
}

export default CreateRol;