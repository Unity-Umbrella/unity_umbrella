export interface IUser{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    campusName: string;
    collegeName: string;
}

 export const dummyUserList : IUser[] = [{
    id: new Date().toJSON().toString(),
    firstName: "Adam",
    lastName: "George",
    email: "adamgeorge@gmail.com",
    campusName: "Doon",
    collegeName: "Conestoga",
},
];

export enum PageEnum{
    list,
    add,
}