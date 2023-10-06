import {House} from "../domain/models/houses";

export interface HouseApiServices{
    fetchAllHouses(): House[]
    fetchHouseById(houseId: number): House
    addHouse(house: House): boolean
    updateHouse(house: House): boolean
    deleteHouse(houseId: House): boolean
}