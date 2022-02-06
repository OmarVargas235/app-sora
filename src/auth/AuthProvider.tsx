import React, { useState, createContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { auth } from '../services/auth/auth';
import { IProps, ISubmitLogin } from './interfaces';
import { showMessage } from '../redux/reducers/reducerSnack';
import { setDataUser } from '../redux/reducers/reducerUser';
import ScreenLoading from '../layaut/ScreenLoading';
import { setDesactive } from '../redux/reducers/reducerBlockUI';

interface AuthContextInterface {
    submitLogin: ({email, password}:ISubmitLogin)=> ()=> void;
}

export const AuthContext = createContext<AuthContextInterface | null>(null);

function AuthProvider({ children }:IProps):JSX.Element {

    const dispatch = useDispatch();

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(():void => {

        Promise.all([

            jwtCheck(),

        ]).then(() => setLoading(false));

    }, []);

    const jwtCheck = ():Promise<void> => {

        return new Promise((resolve) => {
            
            auth.init();

            const event:string|undefined = auth.getEvent();

            if (event === 'onAutoLogin') {
                
                auth
                .signInWithToken()
                    .then(dataUser => {
                        
                        dispatch( setDataUser(dataUser) );
                        resolve();
                    })
                    .catch(err => {
                        
                        resolve();

                        dispatch( showMessage({
                            time: 3000,
                            message: Array.isArray(err) ? err : [err],
                            severity: "error",
                        }) );
                    });

            } else if (event === "onAutoLogout") {

                dispatch( showMessage({
                    time: 3000,
                    message: ['Sesion expirada'],
                    severity: "error",
                }) );

                resolve();
            
            } else if (event === "onNoAccessToken") {

                resolve();
            }

            return Promise.resolve();
        });
    }

    const submitLogin = ({email, password}:ISubmitLogin) => async () => {
        
        return auth
            .signIn(email, password)
            .then(data => {
                
                jwtCheck();
                dispatch( setDesactive() );
            })
            .catch(err => {

                const isArray = Array.isArray(err);
                
                dispatch( showMessage({
                    time: 3000,
                    message: isArray ? err : [err],
                    severity: "error",
                }) );

                dispatch( setDesactive() );
            });
    }
    
    return (
        <AuthContext.Provider value={{
            submitLogin,
        }}>
            {loading ? <ScreenLoading /> : children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
