import React from 'react';
import { Controller, Control, FieldValues } from 'react-hook-form';

import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';

import { grayLight } from '../assets/css/colors';
import { StyleInput } from './style';

const Input = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        border: '1px solid '+grayLight,
        fontSize: 16,
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
            '&:focus': {
                boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
                borderColor: theme.palette.primary.main,
            },
        },
  }));

export interface IProps {
    classes?:string;
    placeholder?:string;
    control:Control<FieldValues, object> | undefined;
    name:string;
    type?:string;
    isPadding?:boolean;
}

const BootstrapInput = ({ control, classes="", placeholder, name, type="text", isPadding=true }:IProps):JSX.Element => (
    <FormControl variant="standard" className={`w-full ${classes}`}>
        <StyleInput isPadding={isPadding}>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } } ) => (
                    <Input
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        type={type}
                        size="medium"
                        className='w-full'
                    />
                )}
            />
        </StyleInput>
    </FormControl>
);

export default BootstrapInput;