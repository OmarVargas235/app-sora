import { ReactChildren, ReactChild } from "react";

type TypeChildren = ReactChild | ReactChild[] | ReactChildren | ReactChildren[];

export interface IProps {
    children: TypeChildren;
}

export interface IInitState {
    openModal: boolean;
    dataUsers: object[];
    dataAreas: object[],
    dataRoles: object[],
    updateUser: boolean;
    dataEdit: object;
}

export type TypesProps = {
    active: boolean;
    area: {_id:string, description:string};
    email: string;
    idRol: number;
    name: string;
    rol: {_id:string, name:string};
    userName: string;
    _id: string;
}

export type TypeCreateUser = {
    email:string;
    idArea:string;
    idRol:string;
    name:string;
    username:string;
    password:string;
    id:string;
}