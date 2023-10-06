import {UserApiService} from "../services/userApiService";
import {GlobalServices} from "../common/globalServices";
import {User} from "../domain/models/user";

export class UserRepository {
    private apiService: UserApiService;


    constructor(apiService?: UserApiService) {
        this.apiService = apiService ?? GlobalServices.userApi;
    }

    //TODO: implement the error methods or return a interface for success or failure
    async getAllUsers(): Promise<User[]> {
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

}