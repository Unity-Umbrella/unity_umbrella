import {DummyUserApi, UserAPI} from "../services/ServerApi/userAPI";
import {DummyHouseAPI} from "../services/ServerApi/houseAPI";
import {DummyCollegeAPI} from "../services/ServerApi/collegeAPI";

export class GlobalServices {
    //TODO: Switch to actual API after testing
    public static userApi = new DummyUserApi();
    public static houseApi = new DummyHouseAPI();
    public static collegeApi = new DummyCollegeAPI();
}