import React, { useContext } from 'react';

import Typography from '@mui/material/Typography';
import ButtonPage from '../../../layaut/Button';
import StickyHeadTable from '../../../layaut/table/Table';
import TableBodyPage from './Rows';
import SearchDataTable from '../../../layaut/filterDataTable/SearchDataTable';
import { columns } from '../utils';
import { UserContext } from '../ContextProvider';
import { OPEN_MODAL_CREATEUSER, DATA_USERS } from '../types';
import { serviceUser } from '../../../services/user';

const UserPage = ():JSX.Element => {

    const { stateUser:{ dataUsers }, dispatchUser }:any = useContext( UserContext );

    const handleClick = ():void => dispatchUser({ type: OPEN_MODAL_CREATEUSER });

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
                        handleClick={handleClick}
                    />

                    <span className='mx-1'></span>

                    <ButtonPage
                        textBtn="exportar a exel"
                        typeTheme=""
                        isContained={false}
                        isPrimary={true}
                        typeSize="small"
                        nameIcon="exel"
                    />
                </span>
                
                <SearchDataTable
                    service={serviceUser}
                    typeService='getDataUser'
                    dispatchUser={dispatchUser}
                    TYPE={DATA_USERS}
                />
            </div>

            <StickyHeadTable
                columns={columns}
                Rows={TableBodyPage}
                data={dataUsers}
            />
        </>
    );
}

export default UserPage;