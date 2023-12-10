export interface IUser{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneno: string;
    dob:string;
    city:string;
    country:string;
    campusName: string;
    collegeName: string;
}

// export interface IUserHouse{
//     id: string;
//     houseOwner: string;
//     houseNumber: string;
//     street: string;
//     postalcode: string;
//     price:string;
//     bedroom:string;
//     washroom:string;
//     description: string;
//     utilitieshydro: string;
//     utilitieswater: string;
//     utilitiesheat: string;
//     houselongitude: string;
//     utilitieslatitude: string;
//     utilitieslocation: string;
// }

//  export const dummyUserList : IUser[] = [{
//     id: new Date().toJSON().toString(),
//     firstName: "Adam",
//     lastName: "George",
//     email: "adamgeorge@gmail.com",
//     campusName: "Doon",
//     collegeName: "Conestoga",
// },
// ];

export enum PageEnum{
    list,
    add,
    edit,
listHouse,
houseAdd,
houseEdit
}