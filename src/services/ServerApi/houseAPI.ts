import {HouseApiServices} from "../houseApiServices";
import {House} from "../../domain/models/houses";
import {dummyLocation} from "./userAPI";

export class HouseAPI implements HouseApiServices {
    addHouse(house: House): boolean {
        return false;
    }

    deleteHouse(houseId: House): boolean {
        return false;
    }

    fetchAllHouses(): House[] {
        return [];
    }

    fetchHouseById(houseId: number): House {
        return dummyHouseList[0];
    }

    updateHouse(house: House): boolean {
        return false;
    }
}


export class DummyHouseAPI implements HouseApiServices {
    addHouse(house: House): boolean {
        return false;
    }

    deleteHouse(houseId: House): boolean {
        return false;
    }

    fetchAllHouses(): House[] {
        return dummyHouseList;
    }

    fetchHouseById(houseId: number): House {
        return dummyHouseList[0];
    }

    updateHouse(house: House): boolean {
        return false;
    }
}


export const dummyHouseList = [new House(1, "John", "10", "550 King St", "N2V1H5", 2000, 2, 1, "A fully furnished place with 2 bedroom and 1 bathroom suitable for 2 people", false, true, false, "", "", "https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg", 0),
    new House(2, "John", "101", "330 Phillip Street", "N2V1H5", 2500, 3, 2, "An unfurnished place with 3 bedroom and 2 bathroom suitable for 5 people", false, true, false, "", "", "https://housing.com/news/wp-content/uploads/2022/11/shutterstock_1715891752-1200x700-compressed.jpg", 0),
    new House(3, "John", "501", "311 Lester St", "N2V1H5", 1250, 1, 1, "An unfurnished place with 1 bedroom and 1 bathroom suitable for 2 people", false, true, false, "", "", "https://www.bostonmagazine.com/wp-content/uploads/sites/2/2020/07/studio-apartments.jpg", 0),
];