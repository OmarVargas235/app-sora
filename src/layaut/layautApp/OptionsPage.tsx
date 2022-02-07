import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { styled, Theme, CSSObject } from '@mui/material/styles';
import List from '@mui/material/List';
import Icon from '@mui/material/Icon';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import MuiDrawer from '@mui/material/Drawer';

import ListsModules from './ListsModules';
import { greenLight } from '../../assets/css/colors';
import { StyleListItem } from '../style';
import { RootState } from '../../redux/reducers/';
import { IModule } from '../../utils/interface';
import { IOpenSubMenu } from '../interfaces';

const drawerWidth:number = 255;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    backgroundColor: greenLight,
    marginTop: "0px",
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
    marginTop: "20px",
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

const OptionsPage = ({ open, handleDrawerClose, handleDrawerOpen }:IProps) => {

    const { user } = useSelector((state:RootState) => state);

    const [isOpenSubMenu, setIsOpenSubMenu] = useState<IOpenSubMenu>({});
    const [modules, setModules] = useState<IModule[]>(user.modules);

    useEffect(() => {

        const dict:IOpenSubMenu = {};

        modules.forEach((module:IModule) => (dict[module.id] = false));

        setIsOpenSubMenu(dict);
    
    }, [modules]);
    

    useEffect(() => {

        !open && setIsOpenSubMenu({});

    }, [open]);

    const openSubMenu = (id:string):void => {

        if (!open) return;

        const activeSubMenu = { ...isOpenSubMenu };
        activeSubMenu[id] = !activeSubMenu[id];

        setIsOpenSubMenu(activeSubMenu);
    }

    const searchModule = (e:React.ChangeEvent<HTMLInputElement>) => {

        const text:string = e.target.value;
        const { modules:modulesRedux } = user;

        const filterData = modulesRedux.filter(({module}) => (
            module.toLowerCase().indexOf(text.toLowerCase()) !== -1 ));
        
        setModules(filterData);
    }

    return (
        <StyleListItem open={open}>
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

                        <input
                            type="text"
                            placeholder="Busqueda menu"
                            className="p-2 rounded-2xl placeholder-black::placeholder"
                            onChange={searchModule}
                        />
                    </ListItem>
                </List>

                <ListsModules
                    modules={modules}
                    openSubMenu={openSubMenu}
                    isOpenSubMenu={isOpenSubMenu}
                    open={open}
                />

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