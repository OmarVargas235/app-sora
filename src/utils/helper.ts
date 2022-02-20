import { showMessage } from "../redux/reducers/reducerSnack";

export const showMessageError = ({ errors, dispatch }:{errors:object, dispatch:Function}):void => {
    
    if (Object.keys(errors).length === 0) return;

    const newErros:string[] = Object.values(errors).map((error):string => {

        return error.message || error.id.message;
    });

    dispatch( showMessage({
        time: 3000,
        message: newErros,
        severity: "error",
    }) );
}