import axios from "axios";

interface IResponse {
    message:string;
    tokenURL:string;
}

class ChangePassword {

    public sendEmail(email:string):Promise<IResponse> {

        return new Promise((resolve, reject) => {

            axios.put('/auth/send-email', {
                email,
            })
            .then(({data}:any) => {

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

    public changePassword(password:string, repeatPassword:string, token:string):Promise<void> {

        return new Promise((resolve, reject) => {

            axios.put('/auth/change-password-by-email', {
                "newPassword": password,
                "repeatPassword": repeatPassword,
                "tokenURL": token
            })
            .then(({data}:any) => {

                !data.error
                ? resolve(data.data)
                : reject(data.data);
                
            })
            .catch(({response}) => {

                reject("Ha ocurrido un problema");
            });
        });
    }

    public verifyTokenURL(token:string):Promise<void> {

        return new Promise((resolve, reject) => {

            axios.get('/auth/verify-token-url', {
                headers: {
                    Authorization: token,
                },
            })
            .then(({data}) => {

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