import React from 'react';
import { Controller } from "react-hook-form";

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';

import { TypesAutocomplete } from '../utils/interface';

const CssTextField = styled(TextField)({
     '& .MuiOutlinedInput-root': {
        paddingTop: '0',
        paddingBottom: '0',
    },
});

interface IProps {
    isPadding:boolean;
    data:TypesAutocomplete[];
    control:any;
    name:string;
}
const AutoCompletePage = ({ isPadding, data, control, name }:IProps):JSX.Element => (
    <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } } ) => (
            <Autocomplete
                options={data}
                sx={{ width: "100%", margin: '0', padding: '0' }}
                value={value ? (value.label || null): value}
                onChange={(e, value) => onChange(value === null ? value : value)}
                isOptionEqualToValue={(option, value) => (option.label === value || value === '')}
                renderInput={(params) => (
                    <CssTextField
                        {...params}
                        placeholder="seleccionar..."
                    />
                )}
            />
        )}
    />    
);

export default React.memo(AutoCompletePage);