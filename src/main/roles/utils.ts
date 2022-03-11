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
    id:string;
	nameRol: string;
};

export interface IDefaultsValues {
	nameRol: string;
    id:string;
}

export const defaultValues:IDefaultsValues = {
	nameRol: '',
    id: '',
};

export const schema = yup.object().shape({
	nameRol: yup.string().required('El campo de ROL es requerido'),
});