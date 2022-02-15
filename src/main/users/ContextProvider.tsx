import { useReducer, createContext, useEffect } from "react";
import { useDispatch } from "react-redux";

import { reducer, initState } from './reducer';
import { IProps, IInitState } from './interface';
import { DATA_USERS } from './types';
import { serviceUser } from '../../services/user';
import { callAPI } from "../../utils/callAPI";

interface UserContextInterface {
    stateUser:IInitState;
    dispatchUser:(action:{type:string, payload:any})=>void;
}

export const UserContext = createContext<UserContextInterface | null>(null);

const UserProvider = ({ children }:IProps):JSX.Element => {

    const dispatch = useDispatch();

    const [stateUser, dispatchUser] = useReducer(reducer, initState);
    
    useEffect(() => {
        
        callAPI({ service: serviceUser, typeService: 'getDataUser', data: {}, dispatch, dispatchReducer: dispatchUser, TYPE: DATA_USERS });

    }, []);

    return (
        <UserContext.Provider value={{
            stateUser,
            dispatchUser,
        }}>
            { children }
        </UserContext.Provider>
    );
}

export default UserProvider;