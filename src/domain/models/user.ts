import {College} from "./college";
import {Location} from "./location";
import {Campus} from "./campus";

export class User {
    private readonly _userId: number;
    private _firstName: string;
    private _lastName: string;
    private _phoneNumber: number;
    private _dateOfBirth: string;
    private _email: string;
    private _password: string;
    private _image: string;
    private _college: College;
    private _location: Location;
    private _campus: Campus;


    constructor(userId: number, firstName: string, lastName: string, phoneNumber: number, dateOfBirth: string, email: string, password: string, image: string, college: College, location: Location, campus: Campus) {
        this._userId = userId;
        this._firstName = firstName;
        this._lastName = lastName;
        this._phoneNumber = phoneNumber;
        this._dateOfBirth = dateOfBirth;
        this._image = image;
        this._email = email;
        this._password = password;
        this._college = college;
        this._location = location;
        this._campus = campus;
    }


    get userId(): number {
        return this._userId;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get phoneNumber(): number {
        return this._phoneNumber;
    }

    set phoneNumber(value: number) {
        this._phoneNumber = value;
    }

    get dateOfBirth(): string {
        return this._dateOfBirth;
    }

    set dateOfBirth(value: string) {
        this._dateOfBirth = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get college(): College {
        return this._college;
    }

    set college(value: College) {
        this._college = value;
    }

    get location(): Location {
        return this._location;
    }

    set location(value: Location) {
        this._location = value;
    }

    get campus(): Campus {
        return this._campus;
    }

    set campus(value: Campus) {
        this._campus = value;
    }

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }

    toJson(): string {
        return JSON.stringify({
            userId: this._userId,
            firstName: this._firstName,
            lastName: this._lastName,
            phoneNumber: this._phoneNumber,
            dateOfBirth: this._dateOfBirth,
            email: this._email,
            password: this._password,
            image: this._image,
            college: this._college.toJson(),
            location: this._location.toJson(),
            campus: this._campus.toJson()
        });
    }

    static fromJson(jsonString: string): User {
        const obj = JSON.parse(jsonString);
        const college = College.fromJson(JSON.stringify(obj.college));
        const location = Location.fromJson(JSON.stringify(obj.location));
        const campus = Campus.fromJson(JSON.stringify(obj.campus));

        return new User(
            obj.userId,
            obj.firstName,
            obj.lastName,
            obj.phoneNumber,
            obj.dateOfBirth,
            obj.image,
            obj.email,
            obj.password,
            college,
            location,
            campus
        );
    }

    toString(): string {
        return `User Information:
        User ID: ${this._userId}
        Name: ${this._firstName} ${this._lastName}
        Phone Number: ${this._phoneNumber}
        Date of Birth: ${this._dateOfBirth}
        Email: ${this._email}
        Image: ${this._image}
        College: ${this._college.toString()}
        Location: ${this._location.toString()}
        Campus: ${this._campus.toString()}`;
    }
}