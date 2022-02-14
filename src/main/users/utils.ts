import * as yup from 'yup';

export interface IColumn {
    id: 'userName' | 'name' | 'email' | 'area' | 'permits' | 'active' | 'actions';
    label: string;
    minWidth?: number;
}

export const columns: IColumn[] = [
    { id: 'userName', label: 'Username', minWidth: 170 },
    {
        id: 'name',
        label: 'Nombre',
        minWidth: 170,
    },
    {
        id: 'email',
        label: 'Email',
        minWidth: 170,
    },
    {
        id: 'area',
        label: 'Area',
        minWidth: 170,
    },
    {
        id: 'permits',
        label: 'Permisos',
        minWidth: 170,
    },
    {
        id: 'active',
        label: 'Activo',
        minWidth: 170,
    },
    {
        id: 'actions',
        label: '',
        minWidth: 170,
    },
];

// Formulario

export type Inputs = {
    username: string;
	name: string;
	email: string;
	area: string;
	permits: string;
};

export interface IDefaultsValues {
    username: string;
	name: string;
	email: string;
	area: string;
	permits: string;
}

export const defaultValues:IDefaultsValues = {
	username: '',
	name: '',
	email: '',
	area: '',
	permits: '',
};

export const schema = yup.object().shape({
	username: yup.string().required('El campo de userName es requerido'),
	name: yup.string().required('El campo de NAME es requerido'),
	email: yup.string().required('El campo de EMAIL es requerido'),
	area: yup.string().required('El campo de AREA es requerido'),
	permits: yup.string().required('El campo de PERMISOS es requerido'),
});