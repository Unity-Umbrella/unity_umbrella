import {UserApiService} from "../services/userApiService";
import {GlobalServices} from "../common/globalServices";
import {User} from "../domain/models/user";
import {AuthAPI} from "../services/ServerApi/authAPI";
import {AuthApiServices} from "../services/authApiServices";
import {CollegeApiServices} from "../services/collegeApiServices";
import {CollegeAPI} from "../services/ServerApi/collegeAPI";
import {College} from "../domain/models/college";

export class UserRepository {
    private apiService: UserApiService;
    private authService: AuthApiServices;
    private collegeService: CollegeApiServices;


    constructor(apiService?: UserApiService, authApiService?: AuthApiServices, collegeService?: CollegeApiServices) {
        this.apiService = apiService ?? GlobalServices.userApi;
        this.authService = authApiService ?? new AuthAPI();
        this.collegeService = collegeService ?? new CollegeAPI();
    }

    //TODO: implement the error methods or return a interface for success or failure
    async getAllUsers(): Promise<User[]> {
        await this.login();
        try {
            const response = await fetch('http://localhost:3001/api/user/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (!response.ok) {
                throw new Error('Users not fetched');
            }
            const data = await response.json();
            const fetchedUsers: User[] = [];
            let i = 0;
            while (i < data.data.recordset.length) {
                const thisUser = data.data.recordset[i];
                fetchedUsers.push(User.fromJson(JSON.stringify({
                    user_id: thisUser.user_id,
                    user_firstName: thisUser.user_firstName,
                    user_lastName: thisUser.user_lastName,
                    user_phoneNumber: thisUser.user_phoneNumber,
                    user_dob: thisUser.user_dob,
                    user_email: thisUser.user_email,
                    user_password: thisUser.user_password,
                    user_image: thisUser.user_image,
                    FK_colleges_college_id: thisUser.FK_colleges_college_id,
                    FK_locations_location_id: thisUser.FK_locations_location_id,
                    FK_campuses_campus_id: thisUser.FK_campuses_campus_id,
                    ratings: thisUser.ratings,
                    user_verified: thisUser.user_verified,
                    user_studentNumber: thisUser.user_studentNumber,
                    user_collegeEmail: thisUser.user_collegeEmail,
                })));
                i++;
            }
            return fetchedUsers;
        } catch (error) {
            // setError('Invalid email or password');
        }
        return this.apiService.fetchAllUsers();
    }

    async getUserById(userId: number): Promise<User | undefined> {
        return this.apiService.fetchUserById(userId);
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
        if (response.success) {
            console.log(response.data);
            return response.data!;
        } else return response.data!;
    }

    async getColleges(): Promise<College[]> {
        return this.collegeService.fetchUniqueColleges();
    }
}