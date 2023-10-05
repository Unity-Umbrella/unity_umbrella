import {College} from "./college";

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

    toString(){
        return "";
    }
}