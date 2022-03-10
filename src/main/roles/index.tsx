import React from 'react';

import RolesProvider from './ContextProvider';

import RolesPage from './components/RolesPage';
import CreateRol from './container/CreateRol';

const Roles = ():JSX.Element => (
    <RolesProvider>
        <RolesPage />

        <CreateRol />
    </RolesProvider>
)

export default Roles;