import {College} from "./college";
import {Location} from "./location";
import {Campus} from "./campus";

export class User {
    private readonly _userId: bigint;
    private _firstName: string;
    private _lastName: string;
    private _phoneNumber: number;
    private _dateOfBirth: string;
    private _email: string;
    private _password: string;
    private _college: College;
    private _location: Location;
    private _campus: Campus;


    constructor(userId: bigint, firstName: string, lastName: string, phoneNumber: number, dateOfBirth: string, email: string, password: string, college: College, location: Location, campus: Campus) {
        this._userId = userId;
        this._firstName = firstName;
        this._lastName = lastName;
        this._phoneNumber = phoneNumber;
        this._dateOfBirth = dateOfBirth;
        this._email = email;
        this._password = password;
        this._college = college;
        this._location = location;
        this._campus = campus;
    }


    get userId(): bigint {
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
}