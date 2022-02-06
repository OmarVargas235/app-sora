import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import Login from '../main/login/';
import SendResetPassword from '../main/send-email';

const RouterPublic = () => (
    <Switch>
        <Route path="/login">
            <Login />
        </Route>

        <Route path="/resetpassword">
            <SendResetPassword />
        </Route>

        <Redirect from="/" to="/login" />
    </Switch>
)

export default RouterPublic;