import { useReducer, createContext, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

import { reducer, initState } from './reducer';
import { IProps, IInitState } from './interface';
import { OPEN_MODAL_CREATEROL } from './types';
import { serviceRoles } from '../../services/roles';
import { callAPI } from "../../utils/callAPI";
import { TypesProps } from './interface';
// import { setActive } from "../../redux/reducers/reducerBlockUI";
// import { setActiveAlertDialog, setNo } from "../../redux/reducers/reducerAlertDialog";
// import { RootState } from "../../redux/reducers";

interface RolContextInterface {
    stateRoles:IInitState;
    dispatchRoles:(action:{type:string, payload:any})=>void;
    openModal:()=>void;
    // openModalDelete:(id:string)=>void;
}

export const RolesContext = createContext<RolContextInterface | null>(null);

const RolesProvider = ({ children }:IProps):JSX.Element => {

    // const { alertDialog:{ yes } } = useSelector((state:RootState) => state);

    // const dispatch = useDispatch();

    const [stateRoles, dispatchRoles] = useReducer(reducer, initState);
    // const { updateUser } = stateUser;

    // const [idDelete, setIdDelete] = useState('');

    // Cargar data por defecto (data user, data roles, data areas)
    // useEffect(() => {

        // dispatchRoles({ type: LOADING_DATA_TABLE, payload: true });
        
        // callAPI({ service: serviceUser, typeService: 'getAreas', data: {}, dispatch, dispatchReducer: dispatchRoles, TYPE: DATA_AREAS });

        // callAPI({ service: serviceUser, typeService: 'getRoles', data: {}, dispatch, dispatchReducer: dispatchRoles, TYPE: DATA_ROLES });

    // }, [dispatch, updateUser]);

    // useEffect(() => {
      
    //     if (!yes || idDelete.length === 0) return;

    //     deleteUser();

    // }, [yes, idDelete]);  

    const openModal = ():void => dispatchRoles({ type: OPEN_MODAL_CREATEROL, payload: null });

    // const deleteUser = ():void => {

        // callAPI({ service: serviceUser, typeService: 'deleteUser', data: {id: idDelete}, dispatch, dispatchReducer: dispatchRoles, update: updateUser, UPDATE: UPDATE_USER });

        // dispatch( setActive() );
        // setIdDelete('');
        // dispatch( setNo() );
    // }

    // const editUser = (data:TypesProps):void => {
        
        // openModal();

        // const newRol = {
        //     ...data.rol,
        //     description: data.rol.name,
        // }

        // data.rol = newRol;

        // dispatchRoles({ type: DATA_EDIT, payload: data });
    // }

    // const openModalDelete = (id:string):void => {

        // setIdDelete(id);
        // dispatch( setActiveAlertDialog() );
    // }

    return (
        <RolesContext.Provider value={{
            stateRoles,
            dispatchRoles,
            openModal,
        }}>
            { children }
        </RolesContext.Provider>
    );
}

export default RolesProvider;