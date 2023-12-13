import {Location} from "./location";

export class House {
    private readonly _houseId: number;
    private _owner: string;
    private _houseNumber: string;
    private _street: string;
    private _postalCode: string;
    private _price: number;
    private _bedroomCount: number;
    private _washroomCount: number;
    private _description: string;
    private _hydro: boolean;
    private _water: boolean;
    private _heat: boolean;
    private _longitude: string;
    private _latitude: string;
    private _image: string;
    private _locationId: number;


    constructor(houseId: number, owner: string, houseNumber: string, street: string, postalCode: string, price: number, bedroomCount: number, washroomCount: number, description: string, hydro: boolean, water: boolean, heat: boolean, longitude: string, latitude: string, image: string, locationId: number) {
        this._houseId = houseId;
        this._owner = owner;
        this._houseNumber = houseNumber;
        this._street = street;
        this._postalCode = postalCode;
        this._price = price;
        this._bedroomCount = bedroomCount;
        this._washroomCount = washroomCount;
        this._description = description;
        this._hydro = hydro;
        this._water = water;
        this._heat = heat;
        this._longitude = longitude;
        this._latitude = latitude;
        this._locationId = locationId;
        this._image = image;
    }

    get houseId(): number {
        return this._houseId;
    }

    get owner(): string {
        return this._owner;
    }

    set owner(value: string) {
        this._owner = value;
    }

    get houseNumber(): string {
        return this._houseNumber;
    }

    set houseNumber(value: string) {
        this._houseNumber = value;
    }

    get street(): string {
        return this._street;
    }

    set street(value: string) {
        this._street = value;
    }

    get postalCode(): string {
        return this._postalCode;
    }

    set postalCode(value: string) {
        this._postalCode = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get bedroomCount(): number {
        return this._bedroomCount;
    }

    set bedroomCount(value: number) {
        this._bedroomCount = value;
    }

    get washroomCount(): number {
        return this._washroomCount;
    }

    set washroomCount(value: number) {
        this._washroomCount = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get hydro(): boolean {
        return this._hydro;
    }

    set hydro(value: boolean) {
        this._hydro = value;
    }

    get water(): boolean {
        return this._water;
    }

    set water(value: boolean) {
        this._water = value;
    }

    get heat(): boolean {
        return this._heat;
    }

    set heat(value: boolean) {
        this._heat = value;
    }

    get longitude(): string {
        return this._longitude;
    }

    set longitude(value: string) {
        this._longitude = value;
    }

    get latitude(): string {
        return this._latitude;
    }

    set latitude(value: string) {
        this._latitude = value;
    }

    get location(): number {
        return this._locationId;
    }

    set location(value: number) {
        this._locationId = value;
    }

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }

    static fromJson(json: string): House {
        const obj = JSON.parse(json);
         return new House(
             obj.house_id,
             obj.house_owner,
             obj.house_number,
             obj.house_street,
             obj.house_postalCode,
             obj.house_price,
             obj.house_bedroomCount,
             obj.house_washroomCount,
             obj.house_description,
             obj.house_utilities_hydro,
             obj.house_utilities_water,
             obj.house_utilities_heat,
             obj.house_longitude,
             obj.house_latitude,
             obj.house_image,
             obj.FK_location_location_id
        );
    }

    toJson(): any {
        return {
            house_id: this.houseId,
            house_owner: this.owner,
            house_number: this.houseNumber,
            house_street: this.street,
            house_postalCode: this.postalCode,
            house_price: this.price,
            house_bedroomCount: this.bedroomCount,
            house_washroomCount: this.washroomCount,
            house_description: this.description,
            house_utilities_hydro: this.hydro,
            house_utilities_water: this.water,
            house_utilities_heat: this.heat,
            house_longitude: this.longitude,
            house_latitude: this.latitude,
            house_image: this.image,
            FK_location_location_id: this.location
        };
    }

    toString(): string {
        return JSON.stringify(this.toJson(), null, 2);
    }


}