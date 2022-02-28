export interface ICallAPI {
    [service:string]:any;
    typeService:string;
    data:object;
    dispatch:Function;
    history?:{replace:Function}|null;
    // dispatchReducer:(action:{type:string|undefined, payload:any})=>void;
    TYPE?:string;
    closeModal?:()=>void;
    update?:boolean;
    UPDATE?:string;
    TYPE_LOADING?:string;
}

interface IProgram {
    name:string;
    children: string[];
}

export interface IModule {
    icon: string;
    id: string;
    module: string;
    programs:[...string[], IProgram],
}

export type TypesAutocomplete = {
    id: string;
    label:string;
}