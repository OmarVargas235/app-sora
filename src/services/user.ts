import axios from "axios";

import { TypeCreateUser } from "../main/users/interface";

class User {

    public getDataUser({text, limit=10}:{text:string, limit:number}):Promise<void> {
        
        const query:string = `limit=${limit}&data=${text || ""}`;

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

    public getAreas({text}:{text:string}):Promise<void> {

        return new Promise((resolve, reject) => {

            axios
                .get('/globals/areas')
                .then(({data}) => {

                    !data.error
                    ? resolve(data.data)
                    : reject("")
                })
                .catch(() => {

                    reject("Ha ocurrido un error");
                });
        });
    }

    public getRoles({text}:{text:string}):Promise<void> {

        return new Promise((resolve, reject) => {

            axios
                .get('/globals/roles')
                .then(({data}) => {

                    !data.error
                    ? resolve(data.data)
                    : reject("");
                })
                .catch(({response:{data} }) => {

                    reject("Ha ocurrido un error");
                });
        });
    }

    public registerUser({email, idArea, idRol, name, username, password}:TypeCreateUser):Promise<void> {
        
        return new Promise((resolve, reject) => {

            axios
                .post('/config/create-user', {
                    userName: username,
                    name,
                    email,
                    password,
                    idRol,
                    idArea,
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

    public editUser({email, idArea, idRol, name, username, password, id}:TypeCreateUser):Promise<void> {

        return new Promise((resolve, reject) => {

            axios
                .put('/config/update-user', {
                    userName: username,
                    name,
                    email,
                    password,
                    idRol,
                    idArea,
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

    public deleteUser({ id }:{id:string}):Promise<void> {
        
        return new Promise((resolve, reject) => {

            axios
                .delete('/config/delete-user/'+id)
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

export const serviceUser = new User();