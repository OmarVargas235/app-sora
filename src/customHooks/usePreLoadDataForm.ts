import { useEffect } from 'react';

interface interfaceProps {
    dataEdit:{[key: string]: {name:string; description:string; _id:string}};
    setValue:any;
    valuesForm:string[];
}

export const usePreLoadDataForm = ({ dataEdit, setValue, valuesForm }:interfaceProps):null => {

    // Pre-cargando los datos del formulario
    useEffect(() => {
        
        if ( Object.keys(dataEdit).length === 0 ) return;

        valuesForm.forEach((value:string) => {

            typeof dataEdit[value] === 'string'
            ? setValue(value, dataEdit[value])
            : setValue(value, { label: dataEdit[value].description, id: dataEdit[value]._id });
        });

    }, [dataEdit, setValue, valuesForm]);

    return null;
}