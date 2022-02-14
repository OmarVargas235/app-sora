import React from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
];

const CssTextField = styled(TextField)({
     '& .MuiOutlinedInput-root': {
        paddingTop: '0',
        paddingBottom: '0',
    },
});

interface IProps {
    isPadding:boolean;
}

const AutoCompletePage = ({ isPadding }:IProps):JSX.Element => (
    <Autocomplete
        disablePortal
        options={top100Films}
        sx={{ width: "100%", margin: '0', padding: '0' }}
        renderInput={(params) => <CssTextField {...params} placeholder="seleccionar..." />}
    />
);

export default AutoCompletePage;