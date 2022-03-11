import { ReactChildren, ReactChild } from "react";

type TypeChildren = ReactChild | ReactChild[] | ReactChildren | ReactChildren[];

export interface IProps {
    children: TypeChildren;
}

export interface IInitState {
}

export type TypesProps = {
}

export type TypeCreateRol = {
    nameRol:string;
    id:string;
}