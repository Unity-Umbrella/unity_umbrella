import {HouseRepository} from "../repositories/HouseRepository";
import {House} from "../domain/models/houses";

export class HouseUseCase{
    private houseRepository: HouseRepository;

    constructor(houseRepository?: HouseRepository) {
        this.houseRepository = houseRepository ?? new HouseRepository();
    }

    async getAllHouses(): Promise<House[]> {
        return await this.houseRepository.getAllHouses();
    }

    async getHouseById(houseId: number): Promise<House> {
        return this.houseRepository.getHouseById(houseId);
    }

    async addHouse(house: House): Promise<boolean> {
        return this.houseRepository.addHouse(house);
    }

    async updateHouse(house: House): Promise<boolean> {
        return this.houseRepository.updateHouse(house);
    }

    async deleteHouse(house: House): Promise<boolean> {
        return this.houseRepository.deleteHouse(house);
    }
}