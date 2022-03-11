import React from 'react';

import Alert, { AlertColor } from '@mui/material/Alert';

interface IProps {
    text:string;
    severity:AlertColor | undefined;
}

const AlertPage = ({ text, severity }:IProps):JSX.Element => (
    <Alert variant="filled" severity={severity}>
        {text}
    </Alert>
)

export default AlertPage;