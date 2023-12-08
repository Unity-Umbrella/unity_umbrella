import {UserRepository} from "../repositories/UserRepository";
import {User} from "../domain/models/user";
import {StudentFilter} from "../common/enums";
import {College} from "../domain/models/college";

export class UserUseCase {
    private userRepository: UserRepository;
    static students = <User[]>[];
    static colleges = <College[]>[];

    constructor(userRepository?: UserRepository) {
        this.userRepository = userRepository ?? new UserRepository();
    }

    async getAllUsers(): Promise<User[]> {
        UserUseCase.students = await this.userRepository.getAllUsers();
        return UserUseCase.students;
    }

    async getUserById(userId: number): Promise<User | undefined> {
        return await this.userRepository.getUserById(userId);
    }

    async getAllColleges(): Promise<College[]> {
        UserUseCase.colleges = await this.userRepository.getColleges();
        return UserUseCase.colleges;
    }

    async addUser(user: User): Promise<boolean> {
        return this.userRepository.addUser(user);
    }

    async updateUser(user: User): Promise<boolean> {
        return this.userRepository.updateUser(user);
    }

    async deleteUser(userId: number): Promise<boolean> {
        return this.userRepository.deleteUser(userId);
    }

    async sortUser(sortBy: string): Promise<User[]> {
        let usersList = <User[]>[...UserUseCase.students];
        switch (sortBy) {
            case StudentFilter.College:
                usersList.sort((a, b) => {
                    return a.campus.collegeId > b.campus.collegeId ? 1 : -1
                });
                break;
            case StudentFilter.Email:
                usersList.sort((a, b) => {
                    return a.email > b.email ? 1 : -1
                });
                break;
            case StudentFilter.FirstName:
                usersList.sort((a, b) => {
                    return a.firstName > b.firstName ? 1 : -1
                });
                break;
            case StudentFilter.LastName:
                usersList.sort((a, b) => {
                    return a.lastName > b.lastName ? 1 : -1
                });
                break;
            case StudentFilter.DateOfBirth:
                usersList.sort((a, b) => {
                    return a.dateOfBirth > b.dateOfBirth ? 1 : -1
                });
                break;
        }
        return usersList;
    }

    async filterUser(selectedValues: string[]): Promise<User[]> {
        let userList = <User[]>[...UserUseCase.students];

        return userList.filter(user => {
            for (const filter of selectedValues) {
                console.log(filter);
                if (filter == user.college.collegeName) return true;
                else return false;
            }
            return true;
        });
    }
}