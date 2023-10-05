

export class Location{
    locationId: bigint;
    private _city: string;
    private _country: string;


    constructor(locationId: bigint, city: string, country: string) {
        this.locationId = locationId;
        this._city = city;
        this._country = country;
    }


    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }

    get country(): string {
        return this._country;
    }

    set country(value: string) {
        this._country = value;
    }

    toString(){
        return "city:"+ this._city + ", country:" + this._country;
    }
}