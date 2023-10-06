import {UserRepository} from "../repositories/UserRepository";
import {User} from "../domain/models/user";

export class UserUseCase{
    private userRepository: UserRepository;

    constructor(userRepository?: UserRepository) {
        this.userRepository = userRepository ?? new UserRepository();
    }
    async getAllUsers(): Promise<User[]>{
        const users =  await this.userRepository.getAllUsers();
        return users;
    }
    async addUser(user: User): Promise<boolean>{
        return this.userRepository.addUser(user);
    }
    async updateUser(user: User): Promise<boolean>{
        return this.userRepository.updateUser(user);
    }
    async deleteUser(userId: number): Promise<boolean>{
        return this.userRepository.deleteUser(userId);
    }
}