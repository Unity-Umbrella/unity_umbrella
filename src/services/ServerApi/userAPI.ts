import {UserApiService} from "../userApiService";
import {User} from "../../domain/models/user";
import {College} from "../../domain/models/college";
import {Location} from "../../domain/models/location";
import {Campus} from "../../domain/models/campus";

export class UserAPI implements  UserApiService{
    addUser(user: User): boolean {
        return false;
    }

    deleteUser(userId: number): boolean {
        return false;
    }

    fetchAllUsers(): User[] {
        return [];
    }

    fetchUserById(userId: number): User {
        return dummyUsers[0];
    }

    updateUser(user: User): boolean {
        return false;
    }
}

//dummy user implementation
export class DummyUserApi implements UserApiService{
    addUser(user: User): boolean {
        return true;
    }

    deleteUser(userId: number): boolean {
        return true;
    }

    fetchAllUsers(): User[] {
        return dummyUsers;
    }

    fetchUserById(userId: number): User {
        return dummyUsers[0];
    }

    updateUser(user: User): boolean {
        return true;
    }
}



//dummy user data
export const dummyCollege = new College(1, "Conestoga College");
export const dummyLocation = new Location(1,"Waterloo","Canada");
export const dummyCampus = new Campus(1, "Waterloo Campus", dummyCollege, dummyLocation);
export const dummyUsers = [
    new User(1, "Bhumil", "Patel", 1234567890, "06-10-2000", "bhumil0610@gmail.com", "password","https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_640.png", dummyCollege, dummyLocation, dummyCampus),
    new User(1, "John", "Doe", 1234567809, "05-11-2000", "test1234@gmail.com", "password","https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg", dummyCollege, dummyLocation, dummyCampus),
]

