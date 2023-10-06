import {UserAPI} from "../services/ServerApi/userAPI";

export class GlobalServices{
    public static userApi = new UserAPI();
}