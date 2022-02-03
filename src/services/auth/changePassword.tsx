import axios from "axios";

class ChangePassword {

    changePasswordByEmail(email:string):Promise<void> {

        return new Promise((resolve, reject) => {

            axios.put('/auth/change-password-by-email', {
                email,
            })
                .then(({data}) => {

                    !data.error ? resolve(data.data) : reject(data.data);
                    
                })
                .catch(({response}) => {

                    console.log(response.data.data);
                    reject(response.data.data);
                });
        });
    }
}

export const changePasswordClass = new ChangePassword();