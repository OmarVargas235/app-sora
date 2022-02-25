import React from 'react';
import axios from 'axios';

import './index.css';
import RouterApp from './routers/RouterApp';
import { GlobalStyle } from './assets/css/global';
import AthProvider from './auth/AuthProvider';
import Snackbars from './layaut/Snackbars';
import BlockUI from './layaut/BlockUI';
import AlertDialog from './layaut/ModalDialog';

axios.defaults.baseURL = 'http://localhost:5000/api';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

function App():JSX.Element {

    return (
        <>
            <GlobalStyle />
            
            <AthProvider>
                <RouterApp />
            </AthProvider>

            <Snackbars />

            <BlockUI />

            <AlertDialog />
        </>
    )
}

export default App;
