import {House} from "./houses";

export class Amenities{
    private readonly _amenityId: number;
    private _amenityName: string;
    private _house: House;


    constructor(amenityId: number, amenityName: string, house: House) {
        this._amenityId = amenityId;
        this._amenityName = amenityName;
        this._house = house;
    }

    get amenityId(): number {
        return this._amenityId;
    }

    get amenityName(): string {
        return this._amenityName;
    }

    set amenityName(value: string) {
        this._amenityName = value;
    }

    get house(): House {
        return this._house;
    }

    set house(value: House) {
        this._house = value;
    }
    static fromJson(json: any): Amenities {
        const house = House.fromJson(json.house); // Assuming House has a fromJson method
        return new Amenities(
            json.amenityId,
            json.amenityName,
            house
        );
    }
    toJson(): any {
        return {
            amenityId: this.amenityId,
            amenityName: this.amenityName,
            house: this.house.toJson()
        };
    }
    toString(): string {
        return JSON.stringify(this.toJson(), null, 2);
    }
}