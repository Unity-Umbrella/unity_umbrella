import {HouseApiServices} from "../services/houseApiServices";
import {GlobalServices} from "../common/globalServices";
import {House} from "../domain/models/houses";
import {User} from "../domain/models/user";

export class HouseRepository {
    private apiService: HouseApiServices;

    constructor(apiService?: HouseApiServices) {
        this.apiService = apiService ?? GlobalServices.houseApi;
    }

    async getAllHouses(): Promise<House[]> {
        let houses: House[] = [];
        try {
            const response = await fetch('http://localhost:3001/api/house/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (!response.ok) {
                throw new Error('Houses not fetched');
            }
            const data = await response.json();
            console.log(data);
            const fetchedHouses: House[] = [];
            let i = 0;
            while (i < data.data.recordset.length) {
                const thisHouse = data.data.recordset[i];
                console.log(thisHouse.house_owner);
                fetchedHouses.push(House.fromJson(JSON.stringify({
                    house_id: thisHouse.house_id,
                    house_owner: thisHouse.house_owner,
                    house_number: thisHouse.house_number,
                    house_street: thisHouse.house_street,
                    house_postalCode: thisHouse.house_postalCode,
                    house_price: thisHouse.house_price,
                    house_bedroomCount: thisHouse.house_bedroomCount,
                    house_washroomCount: thisHouse.house_washroomCount,
                    house_description: thisHouse.house_description,
                    house_utilities_hydro: thisHouse.house_utilities_hydro,
                    house_utilities_water: thisHouse.house_utilities_water,
                    house_utilities_heat: thisHouse.house_utilities_heat,
                    house_longitude: thisHouse.house_longitude,
                    house_latitude: thisHouse.house_latitude,
                    house_image: thisHouse.house_image ?? "https://housing.com/news/wp-content/uploads/2022/11/shutterstock_1715891752-1200x700-compressed.jpg",
                    FK_location_location_id: thisHouse.FK_location_location_id
                })));
                console.log(fetchedHouses);
                i++;
            }
            houses = fetchedHouses;
        } catch (error) {
            // setError('Invalid email or password');
        }
        console.log(houses);
        return houses;
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