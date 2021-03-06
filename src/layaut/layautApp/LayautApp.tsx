import React, { ReactChildren, ReactChild, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import NavbarPage from './NavbarPage';
import OptionsPage from './OptionsPage';
import { setActive, setDesactive } from '../../redux/reducers/reducerOpenLayautApp';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

interface IProps {
  children:ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const LayautApp = ({ children }:IProps):JSX.Element => {

  const dispatch = useDispatch();

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => { open ? dispatch( setActive() ) : dispatch( setDesactive() ) }, [open]);

  const handleDrawerOpen = ():void => setOpen(true);

  const handleDrawerClose = ():void => setOpen(false);

  return <Box sx={{ display: 'flex' }}>
    <CssBaseline />

    <NavbarPage open={open} />

    <OptionsPage
      open={open}
      handleDrawerClose={handleDrawerClose}
      handleDrawerOpen={handleDrawerOpen}
    />

    <Main open={open} className={`overflow-hidden ${open ? '' : "pr-16"}`}>
      <DrawerHeader />
      {children}
    </Main>
  </Box>
}

export default LayautApp;