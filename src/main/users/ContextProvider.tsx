import { useReducer, createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { reducer, initState } from './reducer';
import { IProps, IInitState } from './interface';
import { DATA_AREAS, DATA_ROLES, OPEN_MODAL_CREATEUSER, DATA_EDIT, UPDATE_USER, LOADING_DATA_TABLE } from './types';
import { serviceUser } from '../../services/user';
import { callAPI } from "../../utils/callAPI";
import { TypesProps } from './interface';
import { setActive } from "../../redux/reducers/reducerBlockUI";
import { setActiveAlertDialog, setNo } from "../../redux/reducers/reducerAlertDialog";
import { RootState } from "../../redux/reducers";

interface UserContextInterface {
    stateUser:IInitState;
    dispatchUser:(action:{type:string, payload:any})=>void;
    editUser:(data:TypesProps)=>void;
    openModal:()=>void;
    openModalDelete:(id:string)=>void;
}

export const UserContext = createContext<UserContextInterface | null>(null);

const UserProvider = ({ children }:IProps):JSX.Element => {

    const { alertDialog:{ yes } } = useSelector((state:RootState) => state);

    const dispatch = useDispatch();

    const [stateUser, dispatchUser] = useReducer(reducer, initState);
    const { updateUser } = stateUser;

    const [idDelete, setIdDelete] = useState('');

    // Cargar data por defecto (data user, data roles, data areas)
    useEffect(() => {

        dispatchUser({ type: LOADING_DATA_TABLE, payload: true });
        
        callAPI({ service: serviceUser, typeService: 'getAreas', data: {}, dispatch, dispatchReducer: dispatchUser, TYPE: DATA_AREAS });

        callAPI({ service: serviceUser, typeService: 'getRoles', data: {}, dispatch, dispatchReducer: dispatchUser, TYPE: DATA_ROLES });

    }, [dispatch, updateUser]);

    useEffect(() => {
      
        if (!yes || idDelete.length === 0) return;

        deleteUser();

    }, [yes, idDelete]);
    

    const openModal = ():void => dispatchUser({ type: OPEN_MODAL_CREATEUSER, payload: null });

    const deleteUser = ():void => {

        callAPI({ service: serviceUser, typeService: 'deleteUser', data: {id: idDelete}, dispatch, dispatchReducer: dispatchUser, update: updateUser, UPDATE: UPDATE_USER });

        dispatch( setActive() );
        setIdDelete('');
        dispatch( setNo() );
    }

    const editUser = (data:TypesProps):void => {
        
        openModal();

        const newRol = {
            ...data.rol,
            description: data.rol.name,
        }

        data.rol = newRol;

        dispatchUser({ type: DATA_EDIT, payload: data });
    }

    const openModalDelete = (id:string):void => {

        setIdDelete(id);
        dispatch( setActiveAlertDialog() );
    }

    return (
        <UserContext.Provider value={{
            stateUser,
            dispatchUser,
            editUser,
            openModal,
            openModalDelete,
        }}>
            { children }
        </UserContext.Provider>
    );
}

export default UserProvider;