import React from 'react';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Grid from '@mui/material/Grid';
import { makeStyles, ClassNameMap } from '@mui/styles';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { darkGray } from '../../assets/css/colors';
import { StyleNavbar } from '../style';

const useStyles = makeStyles<ClassNameMap>(() => ({
    toolbar: {
        minHeight: '40px',
    }
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: darkGray,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

interface IProps {
    open:boolean;
}

const NavbarPage = ({ open }:IProps):JSX.Element => {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const openMenu:boolean = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>):void => {

        setAnchorEl(event.currentTarget);
    }

    const handleClose = ():void => setAnchorEl(null);

    return (
        <AppBar position="fixed" open={open}>
            <StyleNavbar>
                <Toolbar className={classes.toolbar}>
                    <Grid container spacing={2}>
                        <Grid item xs={3} className='flex items-center'>
                            <Typography
                                variant="subtitle2"
                                noWrap
                                component="div"
                                className="cursor-pointer text-navbar"
                            >
                                Aplicación
                            </Typography>
                        </Grid>
                        
                        <Grid item xs={9}>
                            <div className='flex justify-end h-full cursor-pointer'>
                                <div
                                    className='flex menu items-center px-2'
                                    aria-controls={openMenu ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openMenu ? 'true' : undefined}
                                    id="basic-button"
                                    onClick={handleClick}
                                    style={{height: "40px"}}
                                >
                                    <KeyboardArrowDownIcon className="mr-2" />

                                    <AccountCircleIcon className="mr-1" />

                                    <Typography variant="subtitle1" noWrap component="p">
                                        admin
                                    </Typography>
                                </div>

                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={openMenu}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Password</MenuItem>
                                    <MenuItem onClick={handleClose}>Salir</MenuItem>
                                </Menu>
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </StyleNavbar>
        </AppBar>
    );
}

export default NavbarPage;