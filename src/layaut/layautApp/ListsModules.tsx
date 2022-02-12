import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import List from '@mui/material/List';
import Icon from '@mui/material/Icon';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import { IOpenSubMenu } from '../interfaces';
import { IModule } from '../../utils/interface';

interface IProps {
    modules:IModule[];
    openSubMenu:(id:string)=>void;
    isOpenSubMenu:IOpenSubMenu;
    open:boolean;
}

interface IIsOpenReports {
    [key: string]: boolean;
}

const ListsModules = ({ modules, openSubMenu, isOpenSubMenu, open }:IProps) => {

    const history = useHistory();

    const [isOpenReports, setIsOpenReports] = useState<IIsOpenReports>({});

    useEffect(() => {

        !open && setIsOpenReports({});

    }, [open]);

    useEffect(() => {

        const programs = modules.map(module => module.programs);
        const reports = programs.map(program => program[program.length - 1]);
        const exitsReports = reports.filter(report => Object.keys(report).length > 0);
        const dict:{[key:string]:boolean} = {};
        
        exitsReports.forEach((report:any, index) => (dict[`${report.name}_${index}`] = false));

        setIsOpenReports(dict);

    }, [modules]);

    const openProgram = (name:string, index:number):void => {

        const key = name+"_"+index;
        const activeReports = { ...isOpenReports };
        activeReports[key] = !activeReports[key];

        history.push(`/${name.toLocaleLowerCase()}`);

        setIsOpenReports(activeReports);
    }

    return (
        <List
            className="pt-0"
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            {modules.map((module:IModule, index:number) => (
                <React.Fragment key={index}>
                    <ListItem button onClick={() => openSubMenu(module.id)}>
                        <ListItemIcon>
                            <Icon
                                className={module.module === 'Salidas' ? 'rotate-180' : ''}
                            >{module.icon}</Icon>
                        </ListItemIcon>

                        <ListItemText primary={module.module} />

                        {
                            isOpenSubMenu[module.id]
                            ? <Icon>expand_less</Icon>
                            : <Icon>expand_more</Icon>
                        }
                    </ListItem>
                    
                    <Collapse in={isOpenSubMenu[module.id]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {
                                module.programs.map((program, index) => (
                                    <React.Fragment key={index}>
                                        <ListItem
                                            button
                                            sx={{ pl: 4 }}
                                            
                                            onClick={() => openProgram(typeof program === 'string'
                                            ? program : program.name, index)
                                        }>
                                            <ListItemText
                                                primary={
                                                    typeof program === 'string'
                                                    ? program : program.name
                                                }
                                            />

                                            {
                                                (typeof program !== 'string' && program.children)
                                                ? <>{
                                                    isOpenReports[program.name+"_"+index]
                                                    ? <Icon>expand_less</Icon>
                                                    : <Icon>expand_more</Icon>
                                                }</>
                                                : null
                                            }
                                        </ListItem>

                                        {
                                            (typeof program !== 'string' && program.children)
                                            ? <Collapse
                                                in={isOpenReports[program.name+"_"+index]}
                                                timeout="auto" unmountOnExit
                                            >
                                                <List component="div" disablePadding>
                                                    {
                                                        program.children.map((name, index) => (
                                                            <ListItem
                                                                button
                                                                sx={{ pl: 6 }}
                                                                key={index}
                                                            >
                                                                <ListItemText
                                                                    primary={name}
                                                                />
                                                            </ListItem>
                                                        ))
                                                    }
                                                </List>
                                            </Collapse> : null
                                        }
                                    </React.Fragment>
                                ))
                            }
                        </List>
                    </Collapse>
                </React.Fragment>
            ))}
        </List>
    );
}

export default ListsModules;