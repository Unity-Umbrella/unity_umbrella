export interface IUserHouse{
    id: string;
    houseOwner: string;
    houseNumber: string;
    street: string;
    postalcode: string;
    price:number;
    bedroom:number;
    washroom:number;
    description: string;
    utilitieshydro: number;
    utilitieswater: number;
    utilitiesheat: number;
    houselongitude: string;
    houselatitude: string;
    houselocation: string;
}

 export const dummyHouseList : IUserHouse[] = [{
    id: new Date().toJSON().toString(),
    houseOwner: "Adam",
    houseNumber: "758",
    street: "Hemlock Street",
    postalcode: "N2L 3R2",
    price: 2000,
    bedroom:3,
    washroom:3,
    description: "Fully furnished house",
    utilitieshydro: 120,
    utilitieswater: 50,
    utilitiesheat: 40,
    houselongitude: "sxzx",
    houselatitude: "gjcfsbvu",
    houselocation: " jhshvvhh  jbxbx  vhbhxb svbvj"


},
];

export enum PageEnumm{
    houseList,
    addhouse,
    edithouse,
}