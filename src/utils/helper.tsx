import { showMessage } from "../redux/reducers/reducerSnack";
import { IMessageErrors } from "./interface";

export const showMessageError = ({ errors, dispatch }:any):void => {

    if (Object.keys(errors).length === 0) return;

    const arrErrors:IMessageErrors[] = Object.values(errors);
        
    const messages:(string|undefined)[] = arrErrors.map((msg) => msg.message);

    dispatch( showMessage({
        time: 3000,
        message: messages,
        severity: "error",
    }) );
}