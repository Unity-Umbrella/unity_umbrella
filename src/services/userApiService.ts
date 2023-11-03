import {User} from "../domain/models/user";

export interface UserApiService {
     fetchAllUsers(): User[]

     fetchUserById(userId: number): User | undefined

     addUser(user: User): boolean

     updateUser(user: User): boolean

     deleteUser(userId: number): boolean
}
