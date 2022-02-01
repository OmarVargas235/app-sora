import { ReactChildren, ReactChild } from 'react';

type TypeChildren = ReactChild | ReactChild[] | ReactChildren | ReactChildren[];

export interface IProps {
    children: TypeChildren;
}

export interface ISubmitLogin {
    email: string;
    password:string;
}