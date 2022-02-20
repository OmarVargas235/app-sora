import { OPEN_MODAL_CREATEUSER, CLOSE_MODAL_CREATEUSER, DATA_USERS, DATA_ROLES, DATA_AREAS, UPDATE_USER } from './types';
import { IInitState } from './interface';

export const initState:IInitState = {
    openModal: false,
    dataUsers: [],
    dataAreas: [],
    dataRoles: [],
    updateUser: false,
}

export const reducer = (state=initState, { type, payload }:{type:string, payload:any}):IInitState => {

    switch (type) {
        
        case OPEN_MODAL_CREATEUSER:
            return {
                ...state,
                openModal: true,
            };
        
        case CLOSE_MODAL_CREATEUSER:
            return {
                ...state,
                openModal: false,
            };

        case DATA_USERS:
            return {
                ...state,
                dataUsers: payload,
            };

        case DATA_AREAS:
                return {
                    ...state,
                    dataAreas: payload,
                };
        
        case DATA_ROLES:
            return {
                ...state,
                dataRoles: payload,
            };

        case UPDATE_USER:
            return {
                ...state,
                updateUser: payload,
            };

        default:
            return state;
    }
}