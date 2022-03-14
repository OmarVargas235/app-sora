import { OPEN_MODAL_CREATEROL, CLOSE_MODAL_CREATEROL, DATA_ROLES, LOADING_DATA_TABLE, UPDATE_ROL } from './types';
import { IInitState } from './interface';

export const initState:IInitState = {
    openModal: false,
    dataRoles: [],
    loadingDataTable: true,
    updateRol: false,
}

export const reducer = (state=initState, { type, payload }:{type:string, payload:any}):IInitState => {

    switch (type) {
        
        case OPEN_MODAL_CREATEROL:
            return {
                ...state,
                openModal: true,
            };

        case CLOSE_MODAL_CREATEROL:
            return {
                ...state,
                openModal: false,
            };

        case DATA_ROLES:
            return {
                ...state,
                dataRoles: payload,
            };
        
        case LOADING_DATA_TABLE:
            return {
                ...state,
                loadingDataTable: payload,
            };
        
        case UPDATE_ROL:
            return {
                ...state,
                updateRol: payload,
            };

        default:
            return state;
    }
}