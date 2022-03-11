import React, { useContext, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Typography from '@mui/material/Typography';

import ButtonPage from '../../../layaut/Button';
import StickyHeadTable from '../../../layaut/table/Table';
import SearchDataTable from '../../../layaut/filterDataTable/SearchDataTable';
import { columns } from '../utils';
import { RolesContext } from '../ContextProvider';
// import { DATA_USERS, LOADING_DATA_TABLE, TEXT_FILTER } from '../types';
import { serviceRoles } from '../../../services/roles';
import TableBodyPage from './Rows';
import { callAPI } from '../../../utils/callAPI';

const RolesPage = ():JSX.Element => {

    const dispatch = useDispatch();

    const { stateRoles:{}, dispatchRoles, openModal }:any = useContext( RolesContext);

    const getUsers = (limit:number, textFilter:string):void => {
        
        // callAPI({ service: serviceUser, typeService: 'getDataUser', data: {limit, text: textFilter}, dispatch, dispatchReducer: dispatchUser, TYPE: DATA_USERS, TYPE_LOADING: LOADING_DATA_TABLE });
    }

    return (
        <>
            <Typography variant="h5" gutterBottom>
                Roles
            </Typography>

            <span  className="flex mt-2 mb-5 w-60">
                <ButtonPage
                    textBtn="Nuevo rol"
                    typeTheme=""
                    isContained={false}
                    isPrimary={false}
                    typeSize="small"
                    nameIcon="add"
                    handleClick={openModal}
                />
            </span>

            <StickyHeadTable
                columns={columns}
                Rows={TableBodyPage}
                data={[]}
                handleEdit={()=>{}}
                handleDelete={()=>{}}
                loadingDataTable={false}
                getDataTable={getUsers}
                textFilter="textFilter"
                align="right"
            />
        </>
    );
}

export default RolesPage;