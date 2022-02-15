import axios from "axios";

class User {

    public async getDataUser({text}:{text:string}):Promise<void> {

        const query:string = `quantity=${10}&data=${text || ""}`;

        return new Promise((resolve, reject) => {

            axios
                .get(`/config/get-users?${query}`)
                .then(({data}) => {

                    !data.error
                    ? resolve(data.data)
                    : reject(data.data)
                })
                .catch(({response:{data} }) => {

                    data
                    ? reject(data.data)
                    : reject("Ha ocurrido un error");
                });
        });
    }
}

export const serviceUser = new User();