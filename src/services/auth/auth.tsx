import axios from 'axios';

class Auth {

    signIn = (email:string, password:string):Promise<any> => {

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
    
                } else reject(data.message);

            })
            .catch(({response}) => {

                reject(response.data.data);
            });
        });
    }

    setSession = (access_token:string|null):void => {
    
        if (access_token) {
    
            localStorage.setItem('jwt_access_token', access_token);
            axios.defaults.headers.common.Authorization = `${access_token}`;
    
        } else {
          
            localStorage.removeItem('jwt_access_token');
            delete axios.defaults.headers.common.Authorization;
        }
    };

    signInWithToken = ():Promise<any> => {
        
        return new Promise((resolve, reject) => {

            axios
                .get('/auth/info-permisos', {
                    headers: {
                        Authorization: this.getAccessToken(),
                    },
                })
                .then(({data}) => {

                    if (!data.error && !!this.getAccessToken()) {
                        
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

    getAccessToken = ():string => {

        return window.localStorage.getItem('jwt_access_token') || "";
    };

    logout = ():void => this.setSession(null);
}

export const auth = new Auth();