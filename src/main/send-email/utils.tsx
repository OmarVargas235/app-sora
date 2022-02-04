import * as yup from 'yup';

export interface IDefaultsValues {
    email:string;
}

export type Inputs = {
    email: string,
};

export const defaultValues:IDefaultsValues = {
	email: '',
};

export const schema = yup.object().shape({
	email: yup
		.string()
		.required('El email es requerido.')
});