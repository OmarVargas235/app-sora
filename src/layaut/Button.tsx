import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { gray } from '../assets/css/colors';

const outerTheme = createTheme({
  palette: {
    primary: {
      main: gray,
    },
  },
});

export interface IProps {
  textBtn:string;
}

const ButtonPage = ({ textBtn }:IProps):JSX.Element => (
    <ThemeProvider theme={outerTheme}>
        <Button
            variant="contained"
            type="submit"
            className='btn'
            fullWidth
            size="large"
            color="primary"
        >{textBtn}</Button>
    </ThemeProvider>
);

export default ButtonPage;