import {AuthApiServices} from "../authApiServices";
import {APIResponse} from "../../common/commonInterface";
import axios from "axios";
import {User} from "../../domain/models/user";

export class AuthAPI implements AuthApiServices {
    async login(loginData: {}): Promise<APIResponse<User>> {
        const url = process.env.REACT_APP_API_ENDPOINT + "/api/users/";
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log('User details:');
            console.log(data);
            return {success: true, data: User.fromJson(data)};
        } catch (e) {
            return { success: false, error: "An error occurred" };
        }
    }
}