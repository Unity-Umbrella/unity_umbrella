import {HouseApiServices} from "../services/houseApiServices";
import {GlobalServices} from "../common/globalServices";
import {House} from "../domain/models/houses";

export class HouseRepository {
    private apiService: HouseApiServices;

    constructor(apiService?: HouseApiServices) {
        this.apiService = apiService ?? GlobalServices.houseApi;
    }

    async getAllHouses(): Promise<House[]> {
        return this.apiService.fetchAllHouses();
    }

    async getHouseById(houseId: number): Promise<House> {
        return this.apiService.fetchHouseById(houseId);
    }

    async addHouse(house: House): Promise<boolean> {
        return this.apiService.addHouse(house);
    }

    async updateHouse(house: House): Promise<boolean> {
        return this.apiService.updateHouse(house);
    }

    async deleteHouse(house: House): Promise<boolean> {
        return this.apiService.deleteHouse(house);
    }
}