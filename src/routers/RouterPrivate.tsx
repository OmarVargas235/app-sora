import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import LayautApp from '../layaut/layautApp/LayautApp';
import Home from '../main/home/';

const RouterPrivate = () => (
    <LayautApp>
        <Switch>
                <Route path="/home">
                    <Home />
                </Route>

            <Redirect from="/" to="/home" />
        </Switch>
    </LayautApp>
)

export default RouterPrivate;