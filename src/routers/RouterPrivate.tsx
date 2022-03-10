import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import Home from '../main/home/';
import User from '../main/users/';
import Roles from '../main/roles/';

const RouterPrivate = () => (
    <Switch>
        <Route path="/home">
            <Home />
        </Route>

        <Route path="/usuarios">
            <User />
        </Route>

        <Route path="/roles">
            <Roles />
        </Route>

        <Redirect from="/" to="/home" />
    </Switch>
)

export default RouterPrivate;