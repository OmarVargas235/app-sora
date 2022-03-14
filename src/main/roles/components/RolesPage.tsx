import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';

import Typography from '@mui/material/Typography';

import ButtonPage from '../../../layaut/Button';
import StickyHeadTable from '../../../layaut/table/Table';
import { columns } from '../utils';
import { RolesContext } from '../ContextProvider';
import { DATA_ROLES, LOADING_DATA_TABLE } from '../types';
import { serviceRoles } from '../../../services/roles';
import TableBodyPage from './Rows';
import { callAPI } from '../../../utils/callAPI';

const RolesPage = ():JSX.Element => {

    const dispatch = useDispatch();

    const { stateRoles:{ dataRoles, loadingDataTable, updateRol }, dispatchRoles, openModal, editRol }:any = useContext( RolesContext);

    const getRoles = (limit:number):void => {
        
        callAPI({ service: serviceRoles, typeService: 'getRoles', data: {limit}, dispatch, dispatchReducer: dispatchRoles, TYPE: DATA_ROLES, TYPE_LOADING: LOADING_DATA_TABLE });
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
                data={dataRoles}
                handleEdit={editRol}
                handleDelete={()=>{}}
                loadingDataTable={loadingDataTable}
                getDataTable={getRoles}
                textFilter="textFilter"
                align="right"
                updateDataTable={updateRol}
            />
        </>
    );
}

export default RolesPage;