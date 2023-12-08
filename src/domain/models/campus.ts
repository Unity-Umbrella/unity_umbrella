import {College} from "./college";
import {Location} from "./location";

export class Campus {
    campusId: number;
    private _campusName: string;
    private _collegeId: number;
    private _locationId: number;

    constructor(campusId: number, campusName: string, collegeId: number, locationId: number) {
        this.campusId = campusId;
        this._campusName = campusName;
        this._collegeId = collegeId;
        this._locationId = locationId;
    }


    get campusName(): string {
        return this._campusName;
    }

    set campusName(value: string) {
        this._campusName = value;
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

    toJson(): string {
        return JSON.stringify({
            campus_id: this.campusId,
            campus_name: this._campusName,
            FK_colleges_college_id: this._collegeId,
            FK_locations_location_id: this._locationId
        });
    }

    static fromJson(jsonString: string): Campus {
        const obj = JSON.parse(jsonString);
        return new Campus(obj.campus_id, obj.campus_name, obj.FK_colleges_college_id, obj.FK_locations_location_id);
    }

    toString(){
        return `CampusId: ${this.campusId}, CampusName: ${this._campusName}, College: ${this._collegeId.toString()}, Location: ${this._locationId.toString()}`;
    }

}