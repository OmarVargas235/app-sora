import { setDesactive } from "../redux/reducers/reducerBlockUI";
import { showMessage } from "../redux/reducers/reducerSnack";
import { setTokenURL } from "../redux/reducers/reducerUser";
import { ICallAPI } from "./interface";

// dispatchReducer = dispatch de cada modulo (no es el dispatch de redux)
export const callAPI = ({ service, typeService, data, dispatch, history, dispatchReducer, TYPE, closeModal, update, UPDATE }:ICallAPI):void => {
    
    service[typeService](data)
        .then((resp:any) => {
            
            !Array.isArray(resp) ? dispatch( showMessage({
                time: 9000,
                message: resp.message ? [resp.message] : [resp],
                severity: "success",
            }))
            : dispatchReducer({ type: TYPE, payload: resp });

            history && history.replace('/');

            resp.tokenURL && dispatch( setTokenURL(resp.tokenURL));
            dispatch( setDesactive() );

            closeModal && closeModal();
            
            (update !== undefined && UPDATE !== undefined) && dispatchReducer({ type: UPDATE, payload: !update });
        })
        .catch((err:any) => {

            dispatch( showMessage({
                time: 9000,
                message: Array.isArray(err) ? err : [err],
                severity: "error",
            }));

            dispatch( setDesactive() );
        });
}

export const callAPICatch = ({ service, typeService, data, dispatch, history }:ICallAPI):void => {

    service[typeService](data)
        .catch((err:any) => {

            err && dispatch( showMessage({
                time: 9000,
                message: ["Solicita otro cambio de contraseña, por favor"],
                severity: "warning",
            }) );

            err && history?.replace('/');
            dispatch( setDesactive() );
        } );
}