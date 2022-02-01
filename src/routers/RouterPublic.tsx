import React from 'react';
import { Route, Redirect } from "react-router-dom";

import Login from '../main/login/';
import ResetPassword from '../main/reset-password/';

const RouterPublic = () => (
    <>
        <Route path="/login">
            <Login />
        </Route>

        <Route path="/resetpassword">
            <ResetPassword />
        </Route>

        <Redirect from="/" to="/login" />
    </>
)

export default RouterPublic;