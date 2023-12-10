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
    private _collegeId: number;
    private _locationId: number;
    private _campusId: number;
    private _ratings: number;
    private _verified: number;
    private _studentNumber: number;
    private _collegeEmail: string;


    constructor(userId: number, firstName: string, lastName: string, phoneNumber: number, dateOfBirth: string, email: string, password: string, image: string, collegeId: number, locationId: number, campusId: number, ratings: number, verified: number, studentNumber: number, collegeEmail: string) {
        this._userId = userId;
        this._firstName = firstName;
        this._lastName = lastName;
        this._phoneNumber = phoneNumber;
        this._dateOfBirth = dateOfBirth;
        this._email = email;
        this._password = password;
        this._image = image;
        this._collegeId = collegeId;
        this._locationId = locationId;
        this._campusId = campusId;
        this._ratings = ratings;
        this._verified = verified;
        this._studentNumber = studentNumber;
        this._collegeEmail = collegeEmail;
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

    get collegeId(): number {
        return this._collegeId;
    }

    set collegeId(value: number) {
        this._collegeId = value;
    }

    get locationId(): number {
        return this._locationId;
    }

    set locationId(value: number) {
        this._locationId = value;
    }

    get campusId(): number {
        return this._campusId;
    }

    set campusId(value: number) {
        this._campusId = value;
    }

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }


    get ratings(): number {
        return this._ratings;
    }

    set ratings(value: number) {
        this._ratings = value;
    }


    get verified(): number {
        return this._verified;
    }

    set verified(value: number) {
        this._verified = value;
    }

    get studentNumber(): number {
        return this._studentNumber;
    }

    set studentNumber(value: number) {
        this._studentNumber = value;
    }

    get collegeEmail(): string {
        return this._collegeEmail;
    }

    set collegeEmail(value: string) {
        this._collegeEmail = value;
    }

    toJson(): string {
        return JSON.stringify({
            user_id: this._userId,
            user_firstName: this._firstName,
            user_lastName: this._lastName,
            user_phoneNumber: this._phoneNumber,
            user_dob: this._dateOfBirth,
            user_email: this._email,
            user_password: this._password,
            user_image: this._image,
            FK_colleges_college_id: this._collegeId,
            FK_locations_location_id: this._locationId,
            FK_campuses_campus_id: this._campusId,
            ratings: this._ratings,
            user_verified: this._verified,
            user_studentNumber: this._studentNumber,
            user_collegeEmail: this._collegeEmail,
        });
    }

    static fromJson(jsonString: string): User {
        const obj = JSON.parse(jsonString);
        return new User(obj.user_id, obj.user_firstName, obj.user_lastName, obj.user_phoneNumber, obj.user_dob, obj.user_email, obj.user_password, obj.user_image, obj.FK_colleges_college_id, obj.FK_locations_location_id, obj.FK_campuses_campus_id, 3, obj.user_verified, obj.user_studentNumber, obj.user_collegeEmail,);
    }

    toString(): string {
        return `User Information:
        User ID: ${this._userId}
        Name: ${this._firstName} ${this._lastName}
        Phone Number: ${this._phoneNumber}
        Date of Birth: ${this._dateOfBirth}
        Email: ${this._email}
        Image: ${this._image}
        College: ${this._collegeId.toString()}
        Location: ${this._locationId.toString()}
        Campus: ${this._campusId.toString()}
        Ratings: ${this._ratings}`;
    }
}