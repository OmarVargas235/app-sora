import React from 'react';

import UserProvider from './ContextProvider';

import UserPage from './components/UserPage';
import CreateUser from './container/CreateUser';

const User = ():JSX.Element => (
    <UserProvider>
        <UserPage />

        <CreateUser />
    </UserProvider>
)

export default User;