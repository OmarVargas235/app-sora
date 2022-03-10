import * as yup from 'yup';

export interface IColumnRol {
    id: 'rol' | 'actions';
    label: string;
    minWidth?: number;
}

export const columns: IColumnRol[] = [
    { id: 'rol', label: 'Rol', minWidth: 70 },
    { id: 'actions', label: '', minWidth: 70 },
];

// Formulario

export type Inputs = {
    userName: string;
	name: string;
	email: string;
	area: {id:string; label:string} | object;
	rol: {id:string; label:string} | object;
	password: string;
    id:string;
};

export interface IDefaultsValues {
    userName: string;
	name: string;
	email: string;
	area: {id:string; label:string} | object;
	rol: {id:string; label:string} | object;
    password: string;
    id:string;
}

export const defaultValues:IDefaultsValues = {
	userName: '',
	name: '',
	email: '',
	area: {},
	rol: {},
	password: '',
    id: '',
};

export const schema = yup.object().shape({
	userName: yup.string().required('El campo de userName es requerido'),
	name: yup.string().required('El campo de NOMBRE es requerido'),
	email: yup.string().required('El campo de EMAIL es requerido'),
	password: yup.string().required('El campo de PASSWORD es requerido'),
    area: yup.object().shape({
        id: yup.string().required('El AREA es requerido.'),
    })
    .nullable()
    .required('El AREA es requerido.'),
    rol: yup.object().shape({
        id: yup.string().required('El ROL es requerido.'),
    })
    .nullable()
    .required('El ROL es requerido.'),
});