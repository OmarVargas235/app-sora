import React from 'react';

import './index.css';
import RouterApp from './routers/RouterApp';
import { GlobalStyle } from './assets/css/global';

function App():JSX.Element {

    return (
        <>
            <GlobalStyle />
            
            <RouterApp />
        </>
    )
}

export default App;
