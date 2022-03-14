import { ReactChildren, ReactChild } from "react";

type TypeChildren = ReactChild | ReactChild[] | ReactChildren | ReactChildren[];

export interface IProps {
    children: TypeChildren;
}

export interface IInitState {
    openModal: boolean,
    dataRoles: object[],
    loadingDataTable: boolean,
    updateRol:boolean;
    dataEdit:object;
}

export type TypesProps = {
    id: string;
    name: string;
    _id: string;
}

export type TypeCreateAndEditRol = {
    nameRol:string;
    id:string;
    _id:string;
}