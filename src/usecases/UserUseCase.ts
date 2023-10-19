import {UserRepository} from "../repositories/UserRepository";
import {User} from "../domain/models/user";
import {StudentFilter} from "../common/enums";

export class UserUseCase {
    private userRepository: UserRepository;
    static students = <User[]>[];

    constructor(userRepository?: UserRepository) {
        this.userRepository = userRepository ?? new UserRepository();
    }

    async getAllUsers(): Promise<User[]> {
        UserUseCase.students = await this.userRepository.getAllUsers();
        return UserUseCase.students;
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
                    return a.campus.college.collegeName > b.campus.college.collegeName ? 1 : -1
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
}