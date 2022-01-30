import Login from '../main/login/';
import ResetPassword from '../main/reset-password/';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

const RouterApp = ():JSX.Element => {

    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/resetpassword">
                    <ResetPassword />
                </Route>

                <Redirect from="/" to="/login" />
            </Switch>
        </Router>
    );
}

export default RouterApp;