import { useReducer, createContext } from "react";

import { reducer, initState } from './reducer';
import { IProps, IInitState } from './interface';

export interface UserContextInterface {
    stateUser:IInitState;
    dispatchUser:(action:{type:string, payload:any})=>void;
}

export const UserContext = createContext<UserContextInterface | null>(null);

const UserProvider = ({ children }:IProps):JSX.Element => {

    const [stateUser, dispatchUser] = useReducer(reducer, initState);

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