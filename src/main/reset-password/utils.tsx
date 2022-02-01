import * as yup from 'yup';

export interface IDefaultsValues {
    password:string;
}

export type Inputs = {
    password: string,
};

export const defaultValues:IDefaultsValues = {
	password: '',
};

export const schema = yup.object().shape({
	password: yup
		.string()
		.required('Por favor introduce tu contraseña.')
		.min(4, 'Mínimo 4 carácteres'),
});