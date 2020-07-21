import Http from './httpService';
import { toast } from 'react-toastify';

export default class User {

    constructor(id = null) {
        this.id = id;
    }

    static async getUsers(length) {

        try {
            const { data } = await Http.get("/users");
            return data;
        } catch (error) {
            toast.error("NO Data Found");
            console.error(error);
            return [];
        }
    }

    async getUser() {
        try {
            const users = await Http.get("/profiles", {
                params: {
                    ids: this.id
                }
            });
            return users[0];
        } catch (error) {
            toast.error("NO Data Found");
            console.error(error);
            return null;
        }
    }

}
