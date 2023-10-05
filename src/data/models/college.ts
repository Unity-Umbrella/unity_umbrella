export class College {
    collegeId: bigint;
    private _collegeName: string;


    constructor(collegeId: bigint, collegeName: string) {
        this.collegeId = collegeId;
        this._collegeName = collegeName;
    }


    get collegeName(): string {
        return this._collegeName;
    }

    set collegeName(value: string) {
        this._collegeName = value;
    }

    toString() {
        return "CollegeName:" + this._collegeName;
    }
}