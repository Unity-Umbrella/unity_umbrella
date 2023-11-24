import {HouseRepository} from "../repositories/HouseRepository";
import {House} from "../domain/models/houses";
import {User} from "../domain/models/user";
import {StudentFilter} from "../common/enums";

export class HouseUseCase {
    private houseRepository: HouseRepository;
    static houses = <House[]>[];

    constructor(houseRepository?: HouseRepository) {
        this.houseRepository = houseRepository ?? new HouseRepository();
    }

    async getAllHouses(): Promise<House[]> {
        HouseUseCase.houses = await this.houseRepository.getAllHouses();
        return HouseUseCase.houses;
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

    async sortHouse(sortBy: string): Promise<House[]> {
        let houseList = <House[]>[...HouseUseCase.houses];
        /*switch (sortBy) {
            case "Bedroom":
                houseList.sort((a, b) => {
                    return a.bedroomCount > b.bedroomCount ? 1 : -1
                });
                break;
            case StudentFilter.Email:
                houseList.sort((a, b) => {
                    return a.email > b.email ? 1 : -1
                });
                break;
            case StudentFilter.FirstName:
                houseList.sort((a, b) => {
                    return a.firstName > b.firstName ? 1 : -1
                });
                break;
            case StudentFilter.LastName:
                usersList.sort((a, b) => {
                    return a.lastName > b.lastName ? 1 : -1
                });
                break;
            case StudentFilter.DateOfBirth:
                usersList.sort((a, b) => {
                    return a.dateOfBirth > b.dateOfBirth ? 1 : -1
                });
                break;
        }*/
        return houseList;
    }
}