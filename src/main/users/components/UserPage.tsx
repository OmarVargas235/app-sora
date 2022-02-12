import React from 'react';

import Typography from '@mui/material/Typography';

import ButtonPage from '../../../layaut/Button';
import SearchData from '../../../layaut/SearchData';
import StickyHeadTable from '../../../layaut/table/Table';

const UserPage = () => (
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

            <SearchData />
        </div>

        <StickyHeadTable />
    </>
);

export default UserPage;