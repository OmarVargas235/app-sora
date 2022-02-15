import axios from 'axios';
import jwtDecode from 'jwt-decode';

interface IToken {
    email:string;
    exp:number;
    iat:number;
}

class Auth {

    private typeEvent:string | undefined;

    public init = ():void => {

        this.handleAuthentication();
    }

    private on = (event:string) => {

        this.typeEvent = event;
    }

    public getEvent = ():string|undefined => {

        return this.typeEvent;
    }

    public signIn = (email:string, password:string):Promise<any> => {

        return new Promise((resolve, reject) => {

            axios.post('/auth/login', {
                email,
                password,
            })
            .then(({data}) => {

                if (!data.error) {

                    const { token } = data;
                    
                    this.setSession(token);
                    
                    resolve("Logeado con exito");
    
                } else reject(data.data);

            })
            .catch(({response}) => {
                
                reject("Ha ocurrido un problema");
            });
        });
    }

    public setSession = (access_token:string|null):void => {
    
        if (access_token) {
    
            localStorage.setItem('jwt_access_token', access_token);
            axios.defaults.headers.common.Authorization = `${access_token}`;
    
        } else {
          
            localStorage.removeItem('jwt_access_token');
            delete axios.defaults.headers.common.Authorization;
        }
    };

    public signInWithToken = ():Promise<any> => {
        
        return new Promise((resolve, reject) => {

            axios
                .get('/auth/info-permisos', {
                    headers: {
                        Authorization: this.getAccessToken(),
                    },
                })
                .then(({data}) => {

                    if (!data.error) {
                        
                        this.setSession( this.getAccessToken() );
                        resolve(data.data);

                    } else {

                        reject('No tienes permisos de autorizado');
                        this.logout();
                    }
                })
                .catch(({response}) => {

                    this.logout();
                    reject(response.data.data);
                });
        });
    };

    private getAccessToken = ():string => {

        return window.localStorage.getItem('jwt_access_token') || "";
    };

    public logout = ():void => this.setSession(null);

    private handleAuthentication = ():void => {
    
        const access_token = this.getAccessToken();

        if (!access_token) {

            this.on('onNoAccessToken');

            return;
        }

        if (this.isAuthTokenValid(access_token)) {

            this.setSession(access_token);
            this.on("onAutoLogin");

        } else {

            this.setSession(null);
            this.on("onAutoLogout");
        }
    };

    private isAuthTokenValid = (access_token:string):boolean => {
    
        if (!access_token) return false;

        const decoded:IToken = jwtDecode(access_token);

        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
            
            console.warn('access token expired');
            return false;
        }

        return true;
    };
}

export const auth = new Auth();