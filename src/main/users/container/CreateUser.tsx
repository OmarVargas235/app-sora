import React, { useEffect, useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';

import CreateUserPage from '../components/CreateUserPage';
import { UserContext } from '../ContextProvider';
import { defaultValues, schema, Inputs } from '../utils';
import { showMessageError } from '../../../utils/helper';
import { serviceUser } from '../../../services/user';
import { callAPI } from '../../../utils/callAPI';
import { setActive } from '../../../redux/reducers/reducerBlockUI';
import { CLOSE_MODAL_CREATEUSER, DATA_EDIT, UPDATE_USER } from '../types';
import { usePreLoadDataForm } from '../../../customHooks/usePreLoadDataForm';
import { useSetStructureSelect } from '../../../customHooks/useSetStructureSelect';

const valuesForm:string[] = ["userName", "name", "email", "area", "rol"];

const CreateUser = ():JSX.Element => {

    const dispatch = useDispatch();

    const { handleSubmit, control, formState:{errors}, setValue, clearErrors } = useForm<Inputs>({
        defaultValues,
        resolver: yupResolver(schema),
    });

    const { stateUser:{ openModal, dataAreas, dataRoles, dataEdit, updateUser }, dispatchUser }:any = useContext( UserContext );
    
    usePreLoadDataForm({ dataEdit, setValue, valuesForm });

    const [areas] = useSetStructureSelect({ data: dataAreas });
    const [roles] = useSetStructureSelect({ data: dataRoles, typeProp: 'name' });

    useEffect(() => showMessageError({ errors, dispatch }), [errors, dispatch]);

    const closeModal = ():void => {

        dispatchUser({ type: CLOSE_MODAL_CREATEUSER });
        clearErrors();
        dispatchUser({ type: DATA_EDIT, payload: {} });
        [...valuesForm, 'password'].forEach((value:any) => setValue(value, "") );
    }
    
    const createAndEditUser = (model:Inputs):void => {
        
        const isEdit:boolean = Object.keys(dataEdit).length > 0;
        const { rol, area }:any = model;
        const typeService = isEdit ? 'editUser' : 'registerUser';
        
        model.rol = rol.id;
        model.area = area.id;
        model.id = isEdit ? dataEdit['_id'] : null;
        
        callAPI({ service: serviceUser, typeService, data: model, dispatch, dispatchReducer: dispatchUser, closeModal, update: updateUser, UPDATE: UPDATE_USER });

        dispatch( setActive() );
    }

    return <CreateUserPage
        openModal={openModal}
        dispatchUser={dispatchUser}
        createAndEditUser={createAndEditUser}
        handleSubmit={handleSubmit}
        control={control}
        dataAreas={areas}
        dataRoles={roles}
        closeModal={closeModal}
    />
}

export default CreateUser;