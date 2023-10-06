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
    private _location: Location;


    constructor(houseId: number, owner: string, houseNumber: string, street: string, postalCode: string, price: number, bedroomCount: number, washroomCount: number, description: string, hydro: boolean, water: boolean, heat: boolean, longitude: string, latitude: string, image: string, location: Location) {
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
        this._location = location;
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

    get location(): Location {
        return this._location;
    }

    set location(value: Location) {
        this._location = value;
    }

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }

    static fromJson(json: any): House {
        const location = Location.fromJson(JSON.stringify(json.location));// Assuming Location also has a fromJson method
        return new House(
            json.houseId,
            json.owner,
            json.houseNumber,
            json.street,
            json.postalCode,
            json.price,
            json.bedroomCount,
            json.washroomCount,
            json.description,
            json.hydro,
            json.water,
            json.heat,
            json.longitude,
            json.latitude,
            json.image,
            location
        );
    }

    toJson(): any {
        return {
            houseId: this.houseId,
            owner: this.owner,
            houseNumber: this.houseNumber,
            street: this.street,
            postalCode: this.postalCode,
            price: this.price,
            bedroomCount: this.bedroomCount,
            washroomCount: this.washroomCount,
            description: this.description,
            hydro: this.hydro,
            water: this.water,
            heat: this.heat,
            longitude: this.longitude,
            latitude: this.latitude,
            image: this.image,
            location: this.location.toJson()
        };
    }

    toString(): string {
        return JSON.stringify(this.toJson(), null, 2);
    }


}