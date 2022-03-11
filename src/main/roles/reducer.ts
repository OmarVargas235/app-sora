import { OPEN_MODAL_CREATEROL, CLOSE_MODAL_CREATEROL } from './types';
import { IInitState } from './interface';

export const initState:IInitState = {
    openModal: false,
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

        default:
            return state;
    }
}