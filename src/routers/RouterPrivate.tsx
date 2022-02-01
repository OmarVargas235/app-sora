import React from 'react';
import { Route, Redirect } from "react-router-dom";

import Home from '../main/home/';

const RouterPrivate = () => (
    <>
        <Route path="/home">
            <Home />
        </Route>

        <Redirect from="/" to="/home" />
    </>
)

export default RouterPrivate;