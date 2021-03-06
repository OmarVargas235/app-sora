import { OPEN_MODAL_CREATEUSER, CLOSE_MODAL_CREATEUSER, DATA_USERS, DATA_ROLES, DATA_AREAS, UPDATE_USER, DATA_EDIT, LOADING_DATA_TABLE, TEXT_FILTER } from './types';
import { IInitState } from './interface';

export const initState:IInitState = {
    openModal: false,
    dataUsers: [],
    dataAreas: [],
    dataRoles: [],
    updateUser: false,
    dataEdit: {},
    loadingDataTable: true,
    textFilter: '',
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

        case DATA_EDIT:
            return {
                ...state,
                dataEdit: payload,
            };
        
        case LOADING_DATA_TABLE:
            return {
                ...state,
                loadingDataTable: payload,
            };

        case TEXT_FILTER:
            return {
                ...state,
                textFilter: payload,
            };

        default:
            return state;
    }
}