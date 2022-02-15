import React from 'react';

import Icon from '@mui/material/Icon';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface IProps {
    filterDataTable:(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>void;
    clearInput:()=>void;
    text:string;
}

const SearchDataTablePage = ({ filterDataTable, clearInput, text }:IProps):JSX.Element => (
    <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
        className="mt-2"
    >
        <IconButton sx={{ p: '5px' }} aria-label="search">
            <SearchIcon />
        </IconButton>

        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search google maps' }}
            onChange={filterDataTable}
            value={text}
        />

        <IconButton
            sx={{ p: '5px' }}
            onClick={clearInput}
        >
            <Icon>close_icon</Icon>
        </IconButton>
    </Paper>
);

export default SearchDataTablePage;