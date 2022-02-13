import { OPEN_MODAL_CREATEUSER, CLOSE_MODAL_CREATEUSER } from './types';
import { IInitState } from './interface';

export const initState:IInitState = {
    openModal: false
}

export const reducer = (state=initState, { type, payload }:{type:string, payload:any}) => {

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

        default:
            return state;
    }
}