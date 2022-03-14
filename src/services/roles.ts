import axios from "axios";

import { TypeCreateAndEditRol } from "../main/roles/interface";

class Roles {

    public getRoles({ limit }:{ limit:number }):Promise<void> {
        
        const query:string = `limit=${limit}`;

        return new Promise((resolve, reject) => {

            axios
                .get('/config/get-roles?'+query)
                .then(({data}) => {

                    !data.error
                    ? resolve(data.data)
                    : reject(data.data);
                })
                .catch(({response:{data} }) => {

                    data
                    ? reject(data.data)
                    : reject("Ha ocurrido un error");
                });
        });
    }

    public registerRol({ nameRol, id }:TypeCreateAndEditRol):Promise<void> {
        
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

                    data
                    ? reject(data.data)
                    : reject("Ha ocurrido un error");
                });
        });
    }

    public editRol({ nameRol, id, _id }:TypeCreateAndEditRol):Promise<void> {
        
        return new Promise((resolve, reject) => {

            axios
                .put('/config/update-rol', {
                    name: nameRol,
                    id,
                    _id,
                })
                .then(({data}) => {

                    !data.error
                    ? resolve(data.data)
                    : reject(data.data);
                })
                .catch(({response:{data} }) => {
                    
                    data
                    ? reject(data.data)
                    : reject("Ha ocurrido un error");
                });
        });
    }
}

export const serviceRoles = new Roles();