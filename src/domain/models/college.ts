export class College {
    collegeId: number;
    private _collegeName: string;


    constructor(collegeId: number, collegeName: string) {
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

    toJson(): string {
        return JSON.stringify({
            collegeId: this.collegeId,
            collegeName: this._collegeName
        });
    }

    static fromJson(jsonString: string): College {
        const obj = JSON.parse(jsonString);
        return new College(obj.collegeId, obj.collegeName);
    }
}