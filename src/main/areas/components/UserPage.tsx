import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';

import Typography from '@mui/material/Typography';
import ButtonPage from '../../../layaut/Button';
import StickyHeadTable from '../../../layaut/table/Table';
import SearchDataTable from '../../../layaut/filterDataTable/SearchDataTable';
import { columns } from '../utils';
import { UserContext } from '../ContextProvider';
import { DATA_USERS, LOADING_DATA_TABLE, TEXT_FILTER } from '../types';
import { serviceUser } from '../../../services/user';
import TableBodyPage from './Rows';
import { callAPI } from '../../../utils/callAPI';

const UserPage = ():JSX.Element => {

    const dispatch = useDispatch();

    const { stateUser:{ dataUsers, loadingDataTable, textFilter, updateUser }, dispatchUser, editUser, openModal, openModalDelete }:any = useContext( UserContext);

    const getUsers = (limit:number, textFilter:string):void => {
        
        callAPI({ service: serviceUser, typeService: 'getDataUser', data: {limit, text: textFilter}, dispatch, dispatchReducer: dispatchUser, TYPE: DATA_USERS, TYPE_LOADING: LOADING_DATA_TABLE });
    }

    return (
        <>
            <Typography variant="h5" gutterBottom>
                Usuarios
            </Typography>

            <div className='mt-4 flex justify-between flex-wrap mb-8'>
                <span  className="flex mt-2 w-96">
                    <ButtonPage
                        textBtn="Nuevo usuario"
                        typeTheme=""
                        isContained={false}
                        isPrimary={false}
                        typeSize="small"
                        nameIcon="add"
                        handleClick={openModal}
                    />

                    <span className='mx-1'></span>

                    <ButtonPage
                        textBtn="exportar a exel"
                        typeTheme=""
                        isContained={false}
                        isPrimary={true}
                        typeSize="small"
                        nameIcon="exel"
                        queryExcel='http://localhost:5000/api/config/excel'
                    />
                </span>
                
                <SearchDataTable
                    dispatch={dispatchUser}
                    LOADING_DATA_TABLE={LOADING_DATA_TABLE}
                    TEXT_FILTER={TEXT_FILTER}
                />
            </div>

            <StickyHeadTable
                columns={columns}
                Rows={TableBodyPage}
                data={dataUsers}
                handleEdit={editUser}
                handleDelete={openModalDelete}
                loadingDataTable={loadingDataTable}
                getDataTable={getUsers}
                textFilter={textFilter}
                updateDataTable={updateUser}
            />
        </>
    );
}

export default UserPage;