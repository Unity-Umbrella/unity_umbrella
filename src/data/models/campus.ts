import {College} from "./college";
import {Location} from "./location";

export class Campus {
    campusId: bigint;
    private _campusName: string;
    private _college: College;
    private _location: Location;

    constructor(campusId: bigint, campusName: string, college: College, location: Location) {
        this.campusId = campusId;
        this._campusName = campusName;
        this._college = college;
        this._location = location;
    }


    get campusName(): string {
        return this._campusName;
    }

    set campusName(value: string) {
        this._campusName = value;
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

    toJson(): string {
        return JSON.stringify({
            campusId: this.campusId,
            campusName: this._campusName,
            college: this._college.toJson(),
            location: this._location.toJson()
        });
    }

    static fromJson(jsonString: string): Campus {
        const obj = JSON.parse(jsonString);
        const college = College.fromJson(JSON.stringify(obj.college));
        const location = Location.fromJson(JSON.stringify(obj.location));
        return new Campus(obj.campusId, obj.campusName, college, location);
    }

    toString(){
        return `CampusId: ${this.campusId}, CampusName: ${this._campusName}, College: ${this._college.toString()}, Location: ${this._location.toString()}`;
    }

}