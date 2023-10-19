import {AuthApiServices} from "../authApiServices";
import {APIResponse} from "../../common/commonInterface";
import axios from "axios";
import {User} from "../../domain/models/user";

export class AuthAPI implements AuthApiServices {
    async login(loginData: {}): Promise<APIResponse<User>> {
        const url = process.env.REACT_APP_API_ENDPOINT + "/api/login/";
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };
        try {
            const response = await axios.post(url,loginData,{headers})
            return {success: true, data: User.fromJson(response.data)};
        } catch (e) {
            return { success: false, error: "An error occurred" };
        }
    }
}