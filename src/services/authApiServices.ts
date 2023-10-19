import {User} from "../domain/models/user";
import {APIResponse} from "../common/commonInterface";

export interface AuthApiServices {
     login(loginData: {}): Promise<APIResponse<User>>;
}