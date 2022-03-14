import { useReducer, createContext } from "react";

import { reducer, initState } from './reducer';
import { IProps, IInitState } from './interface';
import { OPEN_MODAL_CREATEROL, DATA_EDIT } from './types';
import { TypesProps } from './interface';

interface RolContextInterface {
    stateRoles:IInitState;
    dispatchRoles:(action:{type:string, payload:any})=>void;
    openModal:()=>void;
    editRol:(data:TypesProps)=>void;
}

export const RolesContext = createContext<RolContextInterface | null>(null);

const RolesProvider = ({ children }:IProps):JSX.Element => {

    const [stateRoles, dispatchRoles] = useReducer(reducer, initState);

    const openModal = ():void => dispatchRoles({ type: OPEN_MODAL_CREATEROL, payload: null });

    const editRol = (data:TypesProps):void => {
        
        openModal();

        const newRol = {
            ...data,
            nameRol: data.name,
        }

        dispatchRoles({ type: DATA_EDIT, payload: newRol });
    }

    return (
        <RolesContext.Provider value={{
            stateRoles,
            dispatchRoles,
            openModal,
            editRol,
        }}>
            { children }
        </RolesContext.Provider>
    );
}

export default RolesProvider;