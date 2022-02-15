import { ReactChildren, ReactChild } from "react";

type TypeChildren = ReactChild | ReactChild[] | ReactChildren | ReactChildren[];

export interface IProps {
    children: TypeChildren;
}

export interface IInitState {
    openModal:boolean;
    dataUsers:object[];
}

export type TypesProps = {
    active: boolean;
    area: {id:number, name:string};
    email: string;
    idRol: number;
    name: string;
    rol: string;
    userName: string;
    _id: string;
}