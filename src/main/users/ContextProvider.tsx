import { useReducer, createContext, useEffect } from "react";
import { useDispatch } from "react-redux";

import { reducer, initState } from './reducer';
import { IProps, IInitState } from './interface';
import { DATA_USERS, DATA_AREAS, DATA_ROLES, OPEN_MODAL_CREATEUSER, DATA_EDIT } from './types';
import { serviceUser } from '../../services/user';
import { callAPI } from "../../utils/callAPI";
import { TypesProps } from './interface';

interface UserContextInterface {
    stateUser:IInitState;
    dispatchUser:(action:{type:string, payload:any})=>void;
    editUser:(data:TypesProps)=>void;
    openModal:()=>void;
}

export const UserContext = createContext<UserContextInterface | null>(null);

const UserProvider = ({ children }:IProps):JSX.Element => {

    const dispatch = useDispatch();

    const [stateUser, dispatchUser] = useReducer(reducer, initState);
    const { updateUser } = stateUser;
    
    // Cargar data por defecto (data user, data roles, data areas)
    useEffect(() => {
        
        callAPI({ service: serviceUser, typeService: 'getDataUser', data: {}, dispatch, dispatchReducer: dispatchUser, TYPE: DATA_USERS });

        callAPI({ service: serviceUser, typeService: 'getAreas', data: {}, dispatch, dispatchReducer: dispatchUser, TYPE: DATA_AREAS });

        callAPI({ service: serviceUser, typeService: 'getRoles', data: {}, dispatch, dispatchReducer: dispatchUser, TYPE: DATA_ROLES });

    }, [dispatch, updateUser]);

    const openModal = ():void => dispatchUser({ type: OPEN_MODAL_CREATEUSER, payload: null });

    const editUser = (data:TypesProps):void => {

        const { active, _id, ...dataUser } = data;

        openModal();

        dispatchUser({ type: DATA_EDIT, payload: dataUser });
    }

    return (
        <UserContext.Provider value={{
            stateUser,
            dispatchUser,
            editUser,
            openModal,
        }}>
            { children }
        </UserContext.Provider>
    );
}

export default UserProvider;