import React, { useEffect, useState } from 'react';

import { styled, Theme, CSSObject } from '@mui/material/styles';
import List from '@mui/material/List';
import Icon from '@mui/material/Icon';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MuiDrawer from '@mui/material/Drawer';
import Collapse from '@mui/material/Collapse';

import { greenLight } from '../../assets/css/colors';
import { StyleListItem } from '../style';

const drawerWidth:number = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    backgroundColor: greenLight,
    // marginTop: "40px",
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});
  
const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    backgroundColor: greenLight,
    // marginTop: "40px",
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(7)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

interface IProps {
    open:boolean;
    handleDrawerClose:()=>void;
    handleDrawerOpen:()=>void;
}

interface IOpenSubMenu {
    [key: string]: boolean;
}

const OptionsPage = ({ open, handleDrawerClose, handleDrawerOpen }:IProps) => {

    const [isOpenSubMenu, setIsOpenSubMenu] = useState<IOpenSubMenu>({
        inventory: false,
        customers: false,
        shop: false,
        entry: false,
        leave: false,
        setting: false,
    });

    useEffect(() => {
      
        !open && setIsOpenSubMenu({
            inventory: false,
            customers: false,
            shop: false,
            entry: false,
            leave: false,
            setting: false,
        });
    
    }, [open]);

    const openSubMenu = (id:string):void => {

        const activeSubMenu = { ...isOpenSubMenu };
        activeSubMenu[id] = !activeSubMenu[id];

        setIsOpenSubMenu(activeSubMenu);
    }
    
    return (
        <StyleListItem>
            <Drawer
                variant="permanent"
                open={open}
            >
                <List className="opacity-0 p-0">
                    <ListItem button>
                        <Icon>search</Icon>
                    </ListItem>
                </List>

                <List className="p-0">
                    <ListItem button>
                        
                        <Icon>search</Icon>

                        {
                            open ? <input
                                type="text"
                                placeholder="Busqueda menu"
                                className="p-2 rounded-2xl placeholder-black::placeholder"
                            /> : null
                        }
                    </ListItem>
                </List>

                <List
                    className="pt-0"
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    {[
                        {icon: 'inventory_icon', text: 'Inventario', id: 'inventory'},
                        {icon: 'support_agent_icon', text: 'Clientes', id: 'customers'},
                        {icon: 'shop_icon', text: 'Compras', id: 'shop'},
                        {icon: 'moving_icon', text: 'Entradas', id: 'entry'},
                        {icon: 'moving_icon', text: 'Salidas', id: 'leave'},
                        {icon: 'settings_icon', text: 'Configuración', id: 'setting'}
                    ].map((data, index) => (
                        <React.Fragment key={data.text}>
                            <ListItem button onClick={() => openSubMenu(data.id)}>
                                <ListItemIcon>
                                    <Icon
                                        className={data.text === 'Salidas' ? 'rotate-180' : ''}
                                    >{data.icon}</Icon>
                                </ListItemIcon>

                                <ListItemText primary={data.text} />

                                {
                                    isOpenSubMenu[data.id]
                                    ? <Icon>expand_less</Icon>
                                    : <Icon>expand_more</Icon>
                                }
                            </ListItem>

                            <Collapse in={isOpenSubMenu[data.id]} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem sx={{ pl: 4 }}>
                                        <ListItemText primary="Starred" />
                                    </ListItem>
                                </List>
                            </Collapse>
                        </React.Fragment>
                    ))}
                </List>

                <List className="p-0">
                    <ListItem
                        button
                        onClick={open ? handleDrawerClose : handleDrawerOpen}
                        className={open ? "flex justify-end" : ''}
                    >
                        <ListItemIcon>
                            <Icon className={open ? "rotate-180" : ''}
                        >double_arrowIcon</Icon>
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Drawer>
        </StyleListItem>
    );
}

export default OptionsPage;