import {UserApiService} from "../services/userApiService";
import {GlobalServices} from "../common/globalServices";
import {User} from "../domain/models/user";
import {AuthAPI} from "../services/ServerApi/authAPI";
import {AuthApiServices} from "../services/authApiServices";

export class UserRepository {
    private apiService: UserApiService;
    private authService: AuthApiServices;


    constructor(apiService?: UserApiService, authApiService?: AuthApiServices) {
        this.apiService = apiService ?? GlobalServices.userApi;
        this.authService = authApiService ?? new AuthAPI();
    }

    //TODO: implement the error methods or return a interface for success or failure
    async getAllUsers(): Promise<User[]> {
        await this.login();
        return this.apiService.fetchAllUsers();
    }

    async addUser(user: User): Promise<boolean> {
        return this.apiService.addUser(user);
    }

    async updateUser(user: User): Promise<boolean> {
        return this.apiService.updateUser(user);
    }

    async deleteUser(userId: number): Promise<boolean> {
        return this.apiService.deleteUser(userId);
    }

    async login(): Promise<User> {
        const response = await this.authService.login({
            "email": "krishna@gmail.com",
            "password": "krishna"
        });
        if(response.success){
            console.log(response.data);
            return response.data!;
        }
        else return response.data!;
    }

}