import * as yup from 'yup';

export interface IDefaultsValues {
    email:string;
    password:string;
}

export type Inputs = {
	email: string,
	password: string,
};

export const defaultValues:IDefaultsValues = {
	email: '',
	password: '',
};

export const schema = yup.object().shape({
	email: yup.string().required('Ingrese email/username'),
	password: yup
		.string()
		.required('Por favor introduce tu contraseña.')
		.min(4, 'Mínimo 4 carácteres'),
});