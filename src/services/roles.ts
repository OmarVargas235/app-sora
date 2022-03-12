import axios from "axios";

import { TypeCreateRol } from "../main/roles/interface";

class Roles {

    public registerRol({ nameRol, id }:TypeCreateRol):Promise<void> {
        
        return new Promise((resolve, reject) => {

            axios
                .post('/config/create-rol', {
                    name: nameRol,
                    id,
                })
                .then(({data}) => {

                    !data.error
                    ? resolve(data.data)
                    : reject(data.data);
                })
                .catch(({response:{data} }) => {

                    if (data) return reject(data);

                    reject("Ha ocurrido un error");
                });
        });
    }
}

export const serviceRoles = new Roles();