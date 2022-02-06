export interface IMessageErrors {
    message:string;
}

export interface ICallAPI {
    [service:string]:any;
    typeService:string;
    data:object;
    dispatch:Function;
    history:{replace:Function}|null;
}