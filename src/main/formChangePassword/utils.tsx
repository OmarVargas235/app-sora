import * as yup from 'yup';

export interface IDefaultsValues {
    password:string;
    repeatPassword:string;
}

export type Inputs = {
    password: string,
    repeatPassword: string,
};

export const defaultValues:IDefaultsValues = {
	password: '',
	repeatPassword: '',
};

export const schema = yup.object().shape({
	password: yup
		.string()
		.required('El password es requerido.')
		.min(4, 'Password debe tener mínimo 4 carácteres'),
	repeatPassword: yup
		.string()
		.required('Repetir password es requerido.')
		.min(4, 'Repetir password debe tener mínimo 4 carácteres'),
});