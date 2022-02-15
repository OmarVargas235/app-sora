import { OPEN_MODAL_CREATEUSER, CLOSE_MODAL_CREATEUSER, DATA_USERS } from './types';
import { IInitState } from './interface';

export const initState:IInitState = {
    openModal: false,
    dataUsers: [],
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

        default:
            return state;
    }
}