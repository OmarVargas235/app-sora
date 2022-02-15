import axios from "axios";

import { IChangePassword, ISenedEmail, IVerifyTokenURL } from "../interfaces";

interface IResponse {
    message:string;
    tokenURL:string;
}

class ChangePassword {

    public sendEmail({email}:ISenedEmail):Promise<IResponse> {

        return new Promise((resolve, reject) => {

            axios.put('/auth/send-email', {
                email,
            })
            .then(({ data }) => {

                const obj:IResponse = {message: data.data, tokenURL: data.tokenUrl};

                !data.error
                ? resolve(obj)
                : reject(data.data);
                
            })
            .catch(({response}) => {

                console.log(response.data.data);
                reject(response.data.data);
            });
        });
    }

    public changePassword({password, repeatPassword, token}:IChangePassword):Promise<void> {

        return new Promise((resolve, reject) => {

            axios.put('/auth/change-password-by-email', {
                "newPassword": password,
                "repeatPassword": repeatPassword,
                "tokenURL": token
            })
            .then(({ data }) => {

                !data.error
                ? resolve(data.data)
                : reject(data.data);
                
            })
            .catch(({response}) => {

                reject("Ha ocurrido un problema");
            });
        });
    }

    public verifyTokenURL({token}:IVerifyTokenURL):Promise<void> {

        return new Promise((resolve, reject) => {

            axios.get('/auth/verify-token-url', {
                headers: {
                    Authorization: token,
                },
            })
            .then(({ data }) => {

                !data.error
                ? resolve(data.data)
                : reject(data.data);
                
            })
            .catch(({response}) => {

                reject(response.data.data);
            });
        });
    }
}

export const changePasswordClass = new ChangePassword();