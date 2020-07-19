import Http from './httpService';

export class User {

    static getUsers(length) {
        try {
            const response = await Http.get("/search", {
                params: {
                    length: length,
                }
            });
            // return destructing in case the response have only item
            return [...response["items"]];
        } catch (error) {
            toast.error("NO Data Found");
            console.error(error);
            return [];
        }
    }
}

