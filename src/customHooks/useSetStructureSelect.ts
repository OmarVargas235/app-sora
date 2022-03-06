import { useState, useEffect } from 'react';

import { TypesAutocomplete } from '../utils/interface';

type typeData = { description:string };

interface Iprops {
    data:typeData[];
    typeProp?:string;
}

export const useSetStructureSelect = ({ data, typeProp="" }:Iprops) => {

    const [settingData, setSettingData] = useState<TypesAutocomplete[]>([]);

    // Setear a estrucutra --> {label: description, id: _id}
    useEffect(() => {

        if (data.length === 0) return;

        const copyData = JSON.parse( JSON.stringify(data) );

        // Estanderizar props --> [{ description: "", _id: "" }]
        const newData = data[0].description
            ? data
            : copyData.map((data:any) => (data.description = data[typeProp], data));

        const setDataAreas = newData.map(({ description, _id }:{description:string, _id:string}) => ({label: description, id: _id}));

        setSettingData(setDataAreas);

    }, [data, typeProp]);

    return [settingData];
}