import React from 'react';
import { Route, Redirect } from "react-router-dom";

import Login from '../main/login/';
import SendResetPassword from '../main/send-email';

const RouterPublic = () => (
    <>
        <Route path="/login">
            <Login />
        </Route>

        <Route path="/resetpassword">
            <SendResetPassword />
        </Route>

        <Redirect from="/" to="/login" />
    </>
)

export default RouterPublic;