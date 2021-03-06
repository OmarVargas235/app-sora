import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';

import { gray, greenExel, blue } from '../assets/css/colors';
import { ReactComponent as Exel } from '../assets/images/excel.svg';

type size = "small" | "medium" | "large" | undefined;

const grayTheme = createTheme({
  palette: {
    primary: {
      main: gray,
    },
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: greenExel,
    },
    secondary: {
      main: blue,
    },
  },
});

export interface IProps {
  textBtn:string;
  typeTheme?:string;
  isContained?:boolean;
  isPrimary?:boolean;
  typeSize?:size;
  nameIcon?:string;
  handleClick?:()=>void;
  queryExcel?:string;
}

const ButtonPage = ({ textBtn, typeTheme="grayTheme", isContained=true, isPrimary=true, typeSize="large", nameIcon="", handleClick=()=>{}, queryExcel="" }:IProps):JSX.Element => (
  <ThemeProvider theme={typeTheme === "grayTheme" ? grayTheme : theme}>
      {
        queryExcel.length === 0
        ? <Button
            onClick={handleClick}
            variant={isContained ? "contained" : "outlined"}
            type="submit"
            className='btn'
            fullWidth
            size={typeSize}
            color={isPrimary ? "primary" : "secondary"}
            startIcon={<Icon>{nameIcon}</Icon> }
        >{textBtn}</Button>
        : <Button
            onClick={handleClick}
            variant={isContained ? "contained" : "outlined"}
            type="submit"
            className='btn'
            href={queryExcel}
            target="_blank"
            fullWidth
            size={typeSize}
            color={isPrimary ? "primary" : "secondary"}
            startIcon={<Exel />}
        >{textBtn}</Button>
      }
  </ThemeProvider>
);

export default ButtonPage;